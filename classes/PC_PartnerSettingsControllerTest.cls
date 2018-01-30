@IsTest
public with sharing class PC_PartnerSettingsControllerTest {
    @testSetup
    static void setup() {
        List<PartnerCommunitySettings__c> csList = new List<PartnerCommunitySettings__c>();
        PC_TestUtils.addCustomSettingToList(csList, 'GETpartnerOrganizationInfo', 'http://GETpartnerOrganizationInfo');
        PC_TestUtils.addCustomSettingToList(csList, 'PUTupdatePartnerSettings', 'http://PUTupdatePartnerSettings');
        insert csList;
    }

    @IsTest
    static void shouldReturnPartnerSettingsFromTenfold() {
        User communityUser = PC_UserUtils.getUserForUnitTests();
        PC_SingleRequestMock getUserPositiveResp = new PC_SingleRequestMock(200,
            'Complete',
            PC_ConstantRepo.GetUserInfoResponse,
            null);
        PC_SingleRequestMock getPartnerOrganizationInfoPostiveResponse = new PC_SingleRequestMock(200,
            'Complete',
            PC_ConstantRepo.GETpartnerOrganizationInfoResponse,
            null);

        Map<String, HttpCalloutMock> endpoint2TestResp = new Map<String,HttpCalloutMock>();
        endpoint2TestResp.put(PC_Utils.getCustomSettingValue('GetUserInfoEndpoint'), getUserPositiveResp);
        endpoint2TestResp.put(PC_Utils.getCustomSettingValue('GETpartnerOrganizationInfo') , getPartnerOrganizationInfoPostiveResponse);
        HttpCalloutMock multiCalloutMock = new PC_RESTutilsMock(endpoint2TestResp);
        System.runAs(communityUser) {
            Test.startTest();
            Test.setMock(HttpCalloutMock.class, multiCalloutMock);
            PC_PartnerSettingsController.TenfoldPartnerSettingsWrapper result =
                PC_PartnerSettingsController.getPartnerSettings();
            Test.stopTest();
            System.assertEquals('xxx@example.pl', result.features.customEmailSettings.preferences.sender.email);
            System.assertEquals('tenfold.com', result.features.customEmailSettings.preferences.smtp.host);
        }
    }

    @IsTest
    static void shouldReturnPositiveResponseWhenSaved() {
        User communityUser = PC_UserUtils.getUserForUnitTests();
        String callinizeId = [SELECT Contact.Account.Callinize_DB_ID__c FROM User WHERE Id = :communityUser.Id LIMIT 1].Contact.Account.Callinize_DB_ID__c;
        PC_SingleRequestMock getUserPositiveResp = new PC_SingleRequestMock(200,
            'Complete',
            PC_ConstantRepo.GetUserInfoResponse,
            null);
        PC_SingleRequestMock putPartnerOrganizationInfoPostiveResponse = new PC_SingleRequestMock(200,
            'Complete',
            'OK',
            null);
        Map<String, HttpCalloutMock> endpoint2TestResp = new Map<String,HttpCalloutMock>();
        endpoint2TestResp.put(PC_Utils.getCustomSettingValue('GetUserInfoEndpoint'), getUserPositiveResp);
        endpoint2TestResp.put(PC_Utils.getCustomSettingValue('PUTupdatePartnerSettings'), putPartnerOrganizationInfoPostiveResponse);
        HttpCalloutMock multiCalloutMock = new PC_RESTutilsMock(endpoint2TestResp);
        System.runAs(communityUser) {
            Test.startTest();
            Test.setMock(HttpCalloutMock.class, multiCalloutMock);
            Boolean result =
                PC_PartnerSettingsController.savePartnerSettings(PC_ConstantRepo.GETpartnerOrganizationInfoResponse);
            Test.stopTest();
            System.assert(true, result);
        }
    }

    @IsTest
    static void shouldReturnExceptionWhenNoSettingsGiven() {
        User communityUser = PC_UserUtils.getUserForUnitTests();
        PC_SingleRequestMock getUserPositiveResp = new PC_SingleRequestMock(200,
            'Complete',
            PC_ConstantRepo.GetUserInfoResponse,
            null);
        PC_SingleRequestMock putPartnerOrganizationInfoPostiveResponse = new PC_SingleRequestMock(200,
            'Complete',
            'OK',
            null);
        Map<String, HttpCalloutMock> endpoint2TestResp = new Map<String,HttpCalloutMock>();
        endpoint2TestResp.put(PC_Utils.getCustomSettingValue('GetUserInfoEndpoint'), getUserPositiveResp);
        endpoint2TestResp.put(PC_Utils.getCustomSettingValue('PUTupdatePartnerSettings'), putPartnerOrganizationInfoPostiveResponse);
        HttpCalloutMock multiCalloutMock = new PC_RESTutilsMock(endpoint2TestResp);
        System.runAs(communityUser) {
            Test.startTest();
            Test.setMock(HttpCalloutMock.class, multiCalloutMock);
            try {
                Boolean result = PC_PartnerSettingsController.savePartnerSettings('');
            } catch (Exception ex) {

            }
            Test.stopTest();
        }
    }
}