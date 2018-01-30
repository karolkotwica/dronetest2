public with sharing class PC_PartnerSettingsController {

    @AuraEnabled
    public static PC_PartnerSettingsController.TenfoldPartnerSettingsWrapper getPartnerSettings() {
        try{
            Map<String, String> headers = new Map<String, String>();
            String response = PC_RESTutils.callAPITenfold(
                PC_Utils.getCustomSettingValue('GETpartnerOrganizationInfo'),
                PC_RESTutils.GET_METHOD,
                headers
            );
            TenfoldPartnerSettingsWrapper responseObj = (TenfoldPartnerSettingsWrapper)System.JSON.deserialize(response, TenfoldPartnerSettingsWrapper.Class);
            if(responseObj.features == null || responseObj.features.customEmailSettings == null) {
                CustomEmailSettingsWrapper emailSettings = new CustomEmailSettingsWrapper();
                emailSettings.status = 'inactive';
                responseObj.features.customEmailSettings = emailSettings;
            }
            return responseObj;
        } catch (Exception e) {
            throw new AuraHandledException('There was an error while requesting for custom settings');
        }
    }

    @AuraEnabled
    public static Boolean savePartnerSettings(String settings) {
        try{
            TenfoldPartnerSettingsWrapper responseObj = (TenfoldPartnerSettingsWrapper)System.JSON.deserialize(settings, TenfoldPartnerSettingsWrapper.Class);
            String jsonData = JSON.serialize(responseObj);
            Map<String, String> headers = new Map<String, String>();
            String response = PC_RESTutils.callAPITenfold(
                PC_Utils.getCustomSettingValue('PUTupdatePartnerSettings', new List<String>{PC_UserUtils.getTenfoldIdOfCurrentUser()}),
                PC_RESTutils.PUT_METHOD,
                headers,
                jsonData
            );
            return true;
        } catch (Exception e) {
            throw new AuraHandledException('There was an error while saving custom settings');
        }
    }

    public class SenderWrapper {
        @AuraEnabled
        public String name;
        @AuraEnabled
        public String email;
    }

    public class AuthWrapper {
        @AuraEnabled
        public String user;
        @AuraEnabled
        public String pass;
    }

    public class SmtpWrapper {
        @AuraEnabled
        public Boolean secure;
        @AuraEnabled
        public String host;
        @AuraEnabled
        public String port;
        @AuraEnabled
        public AuthWrapper auth;
    }

    public class PreferencesWrapper {
        @AuraEnabled
        public SmtpWrapper smtp;
        @AuraEnabled
        public SenderWrapper sender;
    }

    public class CustomEmailSettingsWrapper {
        @AuraEnabled
        public String status;
        @AuraEnabled
        public PreferencesWrapper preferences;
    }

    public class FeaturesWrapper {
        @AuraEnabled
        public CustomEmailSettingsWrapper customEmailSettings;
    }

    public class SupportWrapper {
        @AuraEnabled
        public String phone;
        @AuraEnabled
        public String email;
    }

    public class PartnerDetailsWrapper {
        @AuraEnabled
        public SupportWrapper support { get; set; }
    }

    public class TenfoldPartnerSettingsWrapper {
        @AuraEnabled
        public PartnerDetailsWrapper partnerDetails { get; set; }
        @AuraEnabled
        public FeaturesWrapper features { get; set; }
    }
}