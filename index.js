var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MetadataRetrieverOriginal = /** @class */ (function (_super) {
    __extends(MetadataRetrieverOriginal, _super);
    function MetadataRetrieverOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetadataRetrieverOriginal.prototype.getMetadata = function (filepath) { return cordova(this, "getMetadata", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getEssentialMetadata = function (filepath) { return cordova(this, "getEssentialMetadata", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getAlbum = function (filepath) { return cordova(this, "getAlbum", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getArtist = function (filepath) { return cordova(this, "getArtist", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getDuration = function (filepath) { return cordova(this, "getDuration", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getTitle = function (filepath) { return cordova(this, "getTitle", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getAlbumArtist = function (filepath) { return cordova(this, "getAlbumArtist", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getCDTrackNumber = function (filepath) { return cordova(this, "getCDTrackNumber", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getCompilation = function (filepath) { return cordova(this, "getCompilation", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getComposer = function (filepath) { return cordova(this, "getComposer", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getDate = function (filepath) { return cordova(this, "getDate", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getDiscNumber = function (filepath) { return cordova(this, "getDiscNumber", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getGenre = function (filepath) { return cordova(this, "getGenre", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.prototype.getNumTracks = function (filepath) { return cordova(this, "getNumTracks", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    MetadataRetrieverOriginal.pluginName = "MetadataRetriever";
    MetadataRetrieverOriginal.plugin = "cordova-plugin-metadata-retriever";
    MetadataRetrieverOriginal.pluginRef = "cordova.plugins.MetadataRetriever";
    MetadataRetrieverOriginal.repo = "https://github.com/janwojcicki/cordova-plugin-metadata-retriever";
    MetadataRetrieverOriginal.platforms = ["Android"];
    return MetadataRetrieverOriginal;
}(IonicNativePlugin));
var MetadataRetriever = new MetadataRetrieverOriginal();
export { MetadataRetriever };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21ldGFkYXRhLXJldHJpZXZlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVakMscUNBQWlCOzs7O0lBRXZELHVDQUFXLGFBQUMsUUFBMkI7SUFJdkMsZ0RBQW9CLGFBQUMsUUFBMkI7SUFJaEQsb0NBQVEsYUFBQyxRQUEyQjtJQUlwQyxxQ0FBUyxhQUFDLFFBQTJCO0lBSXJDLHVDQUFXLGFBQUMsUUFBMkI7SUFJdkMsb0NBQVEsYUFBQyxRQUEyQjtJQUlwQywwQ0FBYyxhQUFDLFFBQTJCO0lBSTFDLDRDQUFnQixhQUFDLFFBQTJCO0lBSTVDLDBDQUFjLGFBQUMsUUFBMkI7SUFJMUMsdUNBQVcsYUFBQyxRQUEyQjtJQUl2QyxtQ0FBTyxhQUFDLFFBQTJCO0lBSW5DLHlDQUFhLGFBQUMsUUFBMkI7SUFJekMsb0NBQVEsYUFBQyxRQUEyQjtJQUlwQyx3Q0FBWSxhQUFDLFFBQTJCOzs7Ozs7NEJBakV6QztFQVd1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuXHRwbHVnaW5OYW1lOiAnTWV0YWRhdGFSZXRyaWV2ZXInLFxuXHRwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tZXRhZGF0YS1yZXRyaWV2ZXInLFxuXHRwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuTWV0YWRhdGFSZXRyaWV2ZXInLFxuXHRyZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2phbndvamNpY2tpL2NvcmRvdmEtcGx1Z2luLW1ldGFkYXRhLXJldHJpZXZlcicsXG5cdHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFSZXRyaWV2ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cdEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAxIH0pXG5cdGdldE1ldGFkYXRhKGZpbGVwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAxIH0pXG5cdGdldEVzc2VudGlhbE1ldGFkYXRhKGZpbGVwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAxIH0pXG5cdGdldEFsYnVtKGZpbGVwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAxIH0pXG5cdGdldEFydGlzdChmaWxlcGF0aDogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXHRAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMSB9KVxuXHRnZXREdXJhdGlvbihmaWxlcGF0aDogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXHRAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMSB9KVxuXHRnZXRUaXRsZShmaWxlcGF0aDogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXHRAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMSB9KVxuXHRnZXRBbGJ1bUFydGlzdChmaWxlcGF0aDogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXHRAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMSB9KVxuXHRnZXRDRFRyYWNrTnVtYmVyKGZpbGVwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAxIH0pXG5cdGdldENvbXBpbGF0aW9uKGZpbGVwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAxIH0pXG5cdGdldENvbXBvc2VyKGZpbGVwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAwLCBlcnJvckluZGV4OiAxIH0pXG5cdGdldERhdGUoZmlsZXBhdGg6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cblx0QENvcmRvdmEoeyBzdWNjZXNzSW5kZXg6IDAsIGVycm9ySW5kZXg6IDEgfSlcblx0Z2V0RGlzY051bWJlcihmaWxlcGF0aDogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXHRAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMSB9KVxuXHRnZXRHZW5yZShmaWxlcGF0aDogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuXHRcdHJldHVybjtcblx0fVxuXHRAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMSB9KVxuXHRnZXROdW1UcmFja3MoZmlsZXBhdGg6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm47XG5cdH1cbn1cbiJdfQ==