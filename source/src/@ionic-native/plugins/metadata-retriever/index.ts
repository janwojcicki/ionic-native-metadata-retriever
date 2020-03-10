import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

@Plugin({
	pluginName: 'MetadataRetriever',
	plugin: 'cordova-plugin-metadata-retriever',
	pluginRef: 'cordova.plugins.MetadataRetriever',
	repo: 'https://github.com/janwojcicki/cordova-plugin-metadata-retriever',
	platforms: ['Android']
})
@Injectable()
export class MetadataRetriever extends IonicNativePlugin {
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getMetadata(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getEssentialMetadata(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getAlbum(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getArtist(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getDuration(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getTitle(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getAlbumArtist(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getCDTrackNumber(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getCompilation(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getComposer(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getDate(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getDiscNumber(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getGenre(filepath: string | string[]): Promise<any> {
		return;
	}
	@Cordova({ successIndex: 0, errorIndex: 1 })
	getNumTracks(filepath: string | string[]): Promise<any> {
		return;
	}
}
