(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minHeight": 20,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "items": [
  {
   "media": "this.panorama_0A5F16D5_062B_5D14_4192_61FB31421245",
   "camera": "this.panorama_0A5F16D5_062B_5D14_4192_61FB31421245_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D605D2C_062C_CF34_4191_16F08A4F777A",
   "camera": "this.panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4",
   "camera": "this.panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D159B61_062D_4B2C_4175_2AFB588A5811",
   "camera": "this.panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D1590A1_062D_552D_4190_F1DFC113958F",
   "camera": "this.panorama_0D1590A1_062D_552D_4190_F1DFC113958F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D15E604_062D_3CEB_4183_51A51A99AC47",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0011381_20220801160717",
 "hfovMin": "150%",
 "id": "panorama_0A5F16D5_062B_5D14_4192_61FB31421245",
 "class": "Panorama",
 "overlays": [
  "this.overlay_169EADC6_062D_CF77_4177_CF1FA01D3646"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D605D2C_062C_CF34_4191_16F08A4F777A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_0D15E604_062D_3CEB_4183_51A51A99AC47",
 "class": "Panorama",
 "label": "R0011393_20220802123148",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0011384_20220801161401",
 "hfovMin": "150%",
 "id": "panorama_0D159B61_062D_4B2C_4175_2AFB588A5811",
 "class": "Panorama",
 "overlays": [
  "this.overlay_145D87CE_0625_3B74_414C_26C2833A3EAA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D15E604_062D_3CEB_4183_51A51A99AC47"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0D1590A1_062D_552D_4190_F1DFC113958F_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_0D1590A1_062D_552D_4190_F1DFC113958F",
 "class": "Panorama",
 "label": "R0011385_20220801162249",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "R0011382_20220801160900",
 "hfovMin": "150%",
 "id": "panorama_0D605D2C_062C_CF34_4191_16F08A4F777A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1773EA76_062B_F517_4152_6534586C0780"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D159B61_062D_4B2C_4175_2AFB588A5811"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0A5F16D5_062B_5D14_4192_61FB31421245_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4",
 "class": "Panorama",
 "label": "R0011383_20220801161246",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.panorama_0A5F16D5_062B_5D14_4192_61FB31421245",
   "camera": "this.panorama_0A5F16D5_062B_5D14_4192_61FB31421245_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D605D2C_062C_CF34_4191_16F08A4F777A",
   "camera": "this.panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4",
   "camera": "this.panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D159B61_062D_4B2C_4175_2AFB588A5811",
   "camera": "this.panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D1590A1_062D_552D_4190_F1DFC113958F",
   "camera": "this.panorama_0D1590A1_062D_552D_4190_F1DFC113958F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D15E604_062D_3CEB_4183_51A51A99AC47",
   "camera": "this.panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0D144BBD_062C_CB14_4177_493DDCDC4DA4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0D1590A1_062D_552D_4190_F1DFC113958F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0D15E604_062D_3CEB_4183_51A51A99AC47_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "width": 550,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": 34,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 140,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--STICKER"
 },
 "layout": "absolute",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 641,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-- SETTINGS"
 },
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": 330,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--INFO photo"
 },
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--LOCATION"
 },
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--FLOORPLAN"
 },
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "right": "0%",
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "data": {
  "name": "--REALTOR"
 },
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)"
},
{
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 168.36,
   "hfov": 9.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.09
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 168.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0A5F16D5_062B_5D14_4192_61FB31421245_1_HS_0_0.png",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.09,
   "hfov": 9.32
  }
 ],
 "id": "overlay_169EADC6_062D_CF77_4177_CF1FA01D3646",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_1_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 146.09,
   "hfov": 10.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.67
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_13146ED7_063D_4D15_4163_37349C9CD8A6",
   "pitch": -40.67,
   "yaw": 146.09,
   "hfov": 10.39,
   "distance": 100
  }
 ],
 "id": "overlay_145D87CE_0625_3B74_414C_26C2833A3EAA",
 "data": {
  "label": "Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_1_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 122.16,
   "hfov": 9.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.14
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_13141ED7_063D_4D15_4170_AAF8FC7F85CB",
   "pitch": -47.14,
   "yaw": 122.16,
   "hfov": 9.32,
   "distance": 100
  }
 ],
 "id": "overlay_1773EA76_062B_F517_4152_6534586C0780",
 "data": {
  "label": "Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "width": 366,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": 2,
 "verticalAlign": "top",
 "height": 78,
 "minWidth": 1,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "absolute",
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "width": 366,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": 86,
 "verticalAlign": "top",
 "height": 46,
 "minWidth": 1,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "absolute",
 "data": {
  "name": "blue block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 391,
 "borderRadius": 0,
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "propagateClick": true,
 "top": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 75,
 "fontSize": 61,
 "class": "Label",
 "borderSize": 0,
 "fontStyle": "italic",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Oswald",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "paddingLeft": 0,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 385,
 "textShadowVerticalLength": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "propagateClick": true,
 "textShadowHorizontalLength": 0,
 "top": 90,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "minWidth": 1,
 "height": 44,
 "fontSize": 28,
 "class": "Label",
 "borderSize": 0,
 "fontStyle": "italic",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": 110,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "button menu sup"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "width": "91.304%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "85.959%",
 "class": "Container",
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 },
 "layout": "vertical",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": 66,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- COLLAPSE"
 },
 "layout": "absolute",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": 0,
 "width": 330,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- EXPANDED"
 },
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "minWidth": 1,
 "class": "Container",
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "absolute",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "minWidth": 1,
 "class": "Container",
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "absolute",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "right": "15%",
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "minWidth": 1,
 "class": "Container",
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical"
},
{
 "colCount": 4,
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0D159B61_062D_4B2C_4175_2AFB588A5811_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_13146ED7_063D_4D15_4163_37349C9CD8A6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0D605D2C_062C_CF34_4191_16F08A4F777A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_13141ED7_063D_4D15_4170_AAF8FC7F85CB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "width": 36,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "height": "100%",
 "layout": "absolute"
},
{
 "maxHeight": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "maxWidth": 80
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "90%",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "height": "100%",
 "layout": "absolute"
},
{
 "maxHeight": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 9,
 "width": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand",
 "maxWidth": 50
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "85%",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "overflow": "visible",
 "width": "50%",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 140,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "itemPaddingLeft": 3,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "itemMinWidth": 50,
 "height": "92%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailGrid",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "paddingRight": 70,
 "itemLabelFontSize": 16,
 "borderRadius": 5,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "paddingBottom": 70,
 "selectedItemLabelFontWeight": "bold",
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemLabelFontColor": "#04A3E1"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollEnabled": true,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": true,
 "minWidth": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "99.975%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 140,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "55%",
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "overflow": "visible",
 "width": "45%",
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarVisible": "rollOver",
 "paddingRight": 40,
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "height": "100%",
 "layout": "absolute"
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 60,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal"
},
{
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "mode": "push",
 "height": "10%",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "bottom",
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image40635"
 },
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 370,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal"
},
{
 "maxHeight": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.jpg",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "minWidth": 40,
 "verticalAlign": "top",
 "height": "25%",
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Image Company"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 1095
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "top": "26%",
 "verticalAlign": "middle",
 "bottom": "26%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 1"
 },
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "height": 130,
 "class": "Container",
 "gap": 5,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 },
 "layout": "vertical"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-1"
 },
 "layout": "vertical",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-2"
 },
 "layout": "vertical",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-3"
 },
 "layout": "vertical",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-4"
 },
 "layout": "vertical",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-5"
 },
 "layout": "vertical",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-6"
 },
 "layout": "vertical",
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.59vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.59vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.59vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.59vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.63vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.59vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.59vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.72vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 180,
 "shadowColor": "#000000",
 "borderRadius": 50,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "minWidth": 1,
 "fontSize": "2.39vh",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "46%",
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.9vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "RECEPTION >",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "ROOMS >",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Inserdt Text",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "AMENITIES >",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "SPORTS AREA >",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Floorplan"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "SWIMMING POOL >",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Photoalbum"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "RESTAURANTS >",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Contact"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": 40,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "blue line"
 },
 "backgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 1,
 "height": 78,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": 56,
 "class": "Container",
 "borderSize": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 1"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 44,
 "class": "Container",
 "borderSize": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 2"
 },
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Main Entrance",
 "shadow": false,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lobby",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Reception",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Reception",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Meeting Area 1",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Meeting Area 2",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Bar",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Chill Out",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Terrace",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Garden",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 8,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "class": "Button",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "shadow": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "left",
 "iconWidth": 32,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "maxHeight": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 200
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "width": "75%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.59vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.45vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.9vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.9vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.9vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.9vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "maxHeight": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.79,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
 },
 "gap": 10,
 "layout": "absolute",
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
