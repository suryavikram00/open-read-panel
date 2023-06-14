
import { Injectable } from '@angular/core';
import { TableMetaData } from './table-meta-data';
import { EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) export class DbTableConfig {

    static tableMetaDataArray : TableMetaData[];

    static numberOfRecordsForPagination = 1000;

    constructor() {
        // this.tableMetaDataArray = [
        //     {
        //         tableName: 'ncr_supplier_login_details',
        //         tableviewName: 'NCR SUPPLIER LOGIN DETAILS',
        //         tableApiName: 'supplier-login-detail',
        //         serverPaginationEnabled: false,
        //         // searchColumn : [],
        //         // tableColumn : [],
        //         // exportEnabled: true,
        //         // accreditionEnabled : true,
        //         // edit: {
        //         //     enabled: false,
        //         //     column: ["fcCode", "accessToken", "userId"]
        //         // },
        //         // create: {
        //         //     enabled: false,
        //         //     column: ["accessToken", "externalCustomerCode", "fcCode", "password", "supplierCode", "userId"]
        //         // }

        //     },
        //     {
        //         tableName: 'ncr_zipcode',
        //         tableviewName: 'NCR ZIP CODE',
        //         tableApiName: 'zipcode',
        //         serverPaginationEnabled: true,
        //         // searchColumn : [],
        //         // tableColumn : [],
        //         // exportEnabled: true,
        //         // accreditionEnabled : false,
        //         // edit: {
        //         //     enabled: false,
        //         //     column: ["apiStatus", "availableStatus"]
        //         // },
        //         // create: {
        //         //     enabled: false,
        //         //     column: ["apiStatus", "availableStatus"]
        //         // }
        //     }

        // ];
    }

    public static getTableMetaDataArray(): TableMetaData[] {
        console.log("getFilter in config table filter");
        return Object.assign([], DbTableConfig.tableMetaDataArray);
    }

    public static getTableMetaDataByApi(apiName: string): TableMetaData {
        // this needs to be looked again #revisit
        let selectedTableMetaData: TableMetaData = DbTableConfig.tableMetaDataArray[0];
        for (let i = 0; i < DbTableConfig.tableMetaDataArray.length; i++) {
            if (DbTableConfig.tableMetaDataArray[i].tableApiName == apiName) {
                selectedTableMetaData = DbTableConfig.tableMetaDataArray[i];
            }
        }
        return Object.assign({}, selectedTableMetaData);
    }

    public static getActualTableMetaDataByApi(apiName: string): TableMetaData {
        // this needs to be looked again #revisit
        let selectedTableMetaData: TableMetaData = DbTableConfig.tableMetaDataArray[0];
        for (let i = 0; i < DbTableConfig.tableMetaDataArray.length; i++) {
            if (DbTableConfig.tableMetaDataArray[i].tableApiName == apiName) {
                selectedTableMetaData = DbTableConfig.tableMetaDataArray[i];
            }
        }
        return selectedTableMetaData;
    }

    // public static getTableMetaDataByTableName(tableName: string): TableMetaData {
    //     // this needs to be looked again #revisit
    //     let selectedTableMetaData: TableMetaData = DbTableConfig.tableMetaDataArray[0];
    //     for (let i = 0; i < DbTableConfig.tableMetaDataArray.length; i++) {
    //         if (DbTableConfig.tableMetaDataArray[i].tableApiName == tableName) {
    //             selectedTableMetaData = DbTableConfig.tableMetaDataArray[i];
    //         }
    //     }
    //     return Object.assign({}, selectedTableMetaData);
    // }

}