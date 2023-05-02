'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "37d95bd4362f1b9f0f970581ac18cfd7",
"main.dart.js": "a562597ac64b56228d58436c4f90743f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "952d0096efd0ef1ca3d935b590e90585",
"manifest.json": "3ff12d9fd16d5d8b2d40bfd609a82307",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "0cfbe7a72f9c1e1adc9c0d4684246866",
"icons/Icon-512.png": "c78f095db7cb0e1e4d222352d87d624b",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/NOTICES": "15519866875ef35c3f9f5eba6ce22381",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/fonts/Agne.otf": "6537c3da19c8b27febf36515e8a04890",
"assets/assets/fonts/HelloStockholm.otf": "681fdccdadb804d58f1e9ee6ed61686c",
"assets/assets/fonts/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/fonts/Bobbers.ttf": "5c76545ba1b3dc897637f923fc2923b6",
"assets/assets/fonts/Canterbury.ttf": "45f5fadb3dbf0140e10b498c7cb030a6",
"assets/assets/svgs/ab1-transformed.svg": "eab3a2f2a6f657e99a4d8a1efa23efe4",
"assets/assets/svgs/IMG_20221211_163405.svg": "fdc75e748e3626ccd4954f4612687400",
"assets/assets/videos/Agne.otf": "6537c3da19c8b27febf36515e8a04890",
"assets/assets/videos/HelloStockholm.otf": "681fdccdadb804d58f1e9ee6ed61686c",
"assets/assets/videos/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/videos/Bobbers.ttf": "5c76545ba1b3dc897637f923fc2923b6",
"assets/assets/videos/Canterbury.ttf": "45f5fadb3dbf0140e10b498c7cb030a6",
"assets/assets/lotties/114810-video-call.json": "455e3555803e09dbd4da438ae8f5a2ed",
"assets/assets/lotties/98149-sending-mail.json:Zone.Identifier": "911a3564f35ae80736ab98fb57d90b16",
"assets/assets/lotties/drone_controls.json": "57759229fc961ab46e05c2596a8371a5",
"assets/assets/lotties/64700-drone.json:Zone.Identifier": "9cc625ef7671398ca018a254463a776b",
"assets/assets/lotties/drone_delivery_2.json": "6693c486d3b07ef9aac4ba52874d4bc8",
"assets/assets/lotties/56757-drone-photography.json:Zone.Identifier": "95ccef76c97716ab574cd0f98fdc8440",
"assets/assets/lotties/42667-drone-with-package.json": "f8425b10e62aba493838f996bf06ac81",
"assets/assets/lotties/78072-map-pin-location.json:Zone.Identifier": "79dad775e720b5d195a03eb063fc6ffa",
"assets/assets/lotties/105682-geo-position-location.json": "0f6c45d1b61cddcf59b26e7ae0587fcd",
"assets/assets/lotties/113610-teacher.json:Zone.Identifier": "bf45c789cc5574b81d336972910fb21d",
"assets/assets/lotties/105682-geo-position-location(1).json:Zone.Identifier": "7ba3b241267464e0ce53b3d9e5f51aff",
"assets/assets/lotties/drone_loading.json:Zone.Identifier": "42306a25d0ff58b81bb340e0fa5b95b4",
"assets/assets/lotties/86234-select-location.json:Zone.Identifier": "169f5ffe8eebc7ab6fd4e9d282382b4a",
"assets/assets/lotties/31251-face-recognition-mapping.json": "1409426e7e69ef0554a3d8bae415ce9c",
"assets/assets/lotties/114810-video-call.json:Zone.Identifier": "045fdba4949491d010f3cc2c034bd5f0",
"assets/assets/lotties/drone_lift.json": "0f0f93358a2028b3e227cc2b9d5645d9",
"assets/assets/lotties/47956-area-map.json:Zone.Identifier": "fdd3128777a94de19e003d8378495d83",
"assets/assets/lotties/56978-world-map.json:Zone.Identifier": "26e98bec5ce3682e39107414f1da7b31",
"assets/assets/lotties/64126-drone-sketch-animation.json:Zone.Identifier": "a46c1825290b663638684ea90d25cd94",
"assets/assets/lotties/123795-woman-sending-man-and-time-is-up.json:Zone.Identifier": "06ad69437c2f519679e6746c7ec99e6e",
"assets/assets/lotties/drone_trial.json": "7beed2028de7323bfce694a49682c2e6",
"assets/assets/lotties/21233-teacher.json": "4e43f74108f39c27521409c48ae30077",
"assets/assets/lotties/drone_delivery_3.json:Zone.Identifier": "8a25203cf5a4dcc032207ea1028ce2ac",
"assets/assets/lotties/65176-drone.json": "5d4cf544ea9369204576c5281dfda342",
"assets/assets/lotties/drone_fault.json": "7b74071dd536bece67f8192711b42e93",
"assets/assets/lotties/drone_lift.json:Zone.Identifier": "9e371c9d7d16fe9a4fcab733959e58e3",
"assets/assets/lotties/105682-geo-position-location.json:Zone.Identifier": "7ba3b241267464e0ce53b3d9e5f51aff",
"assets/assets/lotties/29289-drone.json:Zone.Identifier": "447d8adf668d530d78932f5b9b49dc54",
"assets/assets/lotties/109112-geo-tag-animation.json": "e29f5ed3d410105e3484a2a8f0dd52ac",
"assets/assets/lotties/9507-finding-route.json:Zone.Identifier": "d8f2c5a68469163e982ffa431df825f1",
"assets/assets/lotties/9507-finding-route.json": "8ada88a2baf6df924d4a79d76b438977",
"assets/assets/lotties/98149-sending-mail.json": "56e5b0634ff15163187a3f3ed27ac8b5",
"assets/assets/lotties/105682-geo-position-location(1).json": "0f6c45d1b61cddcf59b26e7ae0587fcd",
"assets/assets/lotties/drone_pilot.json:Zone.Identifier": "06b98df04f3e2247ec35bb8d1a860d44",
"assets/assets/lotties/65718-drone.json:Zone.Identifier": "42306a25d0ff58b81bb340e0fa5b95b4",
"assets/assets/lotties/26623-map-navigation.json": "1b7d5721267857ab8fde903fe741bbed",
"assets/assets/lotties/drone_spray.json:Zone.Identifier": "11a07180aea7f674839823aaa5a4a18f",
"assets/assets/lotties/7482-pin-up.json": "46b13229f4a89f9cb004c0b05ae0d811",
"assets/assets/lotties/drone_deliver.json": "ccef81d1f1eba382cc7fb1bed432afec",
"assets/assets/lotties/84709-map-browsing.json:Zone.Identifier": "fa5c3d1cee8ae804972cae02a61b513d",
"assets/assets/lotties/drone_scan.json:Zone.Identifier": "447d8adf668d530d78932f5b9b49dc54",
"assets/assets/lotties/drone_loading.json": "8c8678626a84577ba3c47f77d0bb80b0",
"assets/assets/lotties/47956-area-map.json": "7958a8c809fc98a841df84e19860cbf0",
"assets/assets/lotties/86234-select-location.json": "187bc593847d9c2efed2a40170bdbf3d",
"assets/assets/lotties/27225-drone-and-remote.json": "4d6fc6a64bbeaee35079a0f1363ed3fc",
"assets/assets/lotties/drone_trial.json:Zone.Identifier": "7a0ac6b25318ad93099aec656184ac55",
"assets/assets/lotties/90394-location-map.json": "40471ab8a67511bdebd38f635978bee8",
"assets/assets/lotties/27225-drone-and-remote.json:Zone.Identifier": "b256b5761f4cb0a051da0eb9d4945db2",
"assets/assets/lotties/84709-map-browsing.json": "02f3c68471cd3caf4117b065ea638203",
"assets/assets/lotties/29289-drone.json": "7c16a63d1a8a41fa60f77c540d25d8ea",
"assets/assets/lotties/123795-woman-sending-man-and-time-is-up.json": "96b32493d20db0bfb3fb6a6faef310b5",
"assets/assets/lotties/42667-drone-with-package.json:Zone.Identifier": "8a25203cf5a4dcc032207ea1028ce2ac",
"assets/assets/lotties/65176-drone.json:Zone.Identifier": "f2bbbbd1b9b42d47a888805147c018fb",
"assets/assets/lotties/drone_delivery_3.json": "f8425b10e62aba493838f996bf06ac81",
"assets/assets/lotties/86094-drone-fork.json:Zone.Identifier": "11a07180aea7f674839823aaa5a4a18f",
"assets/assets/lotties/56757-drone-photography.json": "7ae6c2a3567f6b09017b5766eb148fde",
"assets/assets/lotties/64700-drone.json": "2f129922d260fafd5a0b43ca8ef903c5",
"assets/assets/lotties/drone_controls.json:Zone.Identifier": "dd0ff053674ef3657ed016bfd9c02388",
"assets/assets/lotties/109112-geo-tag-animation.json:Zone.Identifier": "adfbbee669eada402d27bba9a296fce8",
"assets/assets/lotties/21270-student.json:Zone.Identifier": "30fc53e36121667cf00600de5b52d70b",
"assets/assets/lotties/43806-drone-wedding.json": "08200e2f8e519680c7df6210f289ff4e",
"assets/assets/lotties/7482-pin-up.json:Zone.Identifier": "f9daa96ca5733f472657b4d46fc8b485",
"assets/assets/lotties/drone_pilot.json": "9b75f6c5fe804b7c33541705cd9e69d6",
"assets/assets/lotties/21233-teacher.json:Zone.Identifier": "3fb93384657d97430e34d06445a9a892",
"assets/assets/lotties/drone_scan.json": "7c16a63d1a8a41fa60f77c540d25d8ea",
"assets/assets/lotties/20497-dlivery-map.json": "0b65111fca5c56fa391c957df0831802",
"assets/assets/lotties/113610-teacher.json": "e14c3e8a9aecb566a169916287f48eda",
"assets/assets/lotties/56978-world-map.json": "20759c008efb6d17e0d887aa41b1c256",
"assets/assets/lotties/86094-drone-fork.json": "056dc9c010f255d3dcb747ea79ac3172",
"assets/assets/lotties/64126-drone-sketch-animation.json": "3fd4e13af1a9b6292b5f0357b33c3474",
"assets/assets/lotties/31251-face-recognition-mapping.json:Zone.Identifier": "24279f2e09e5c12e719343ccc334995f",
"assets/assets/lotties/21270-student.json": "764837ccb3781f100fbcb730fb570936",
"assets/assets/lotties/67783-drones-isometric-lottie-animation.json:Zone.Identifier": "bfd19f6f3763c613c921521fd256882e",
"assets/assets/lotties/drone_fault.json:Zone.Identifier": "a522287cdd87544dd7910f82d89f7b6b",
"assets/assets/lotties/90394-location-map.json:Zone.Identifier": "1e21c96df3a1d3d330882b9e83276f46",
"assets/assets/lotties/20497-dlivery-map.json:Zone.Identifier": "68d38ac13b55b05817146e488077f481",
"assets/assets/lotties/43806-drone-wedding.json:Zone.Identifier": "58685341f5271d159ce0a5599e92b724",
"assets/assets/lotties/drone_delivery_2.json:Zone.Identifier": "236112317d1125247ff0bf6ffbeec4b2",
"assets/assets/lotties/65718-drone.json": "8c8678626a84577ba3c47f77d0bb80b0",
"assets/assets/lotties/78072-map-pin-location.json": "88dfc036c192d72b6ac58e7b6522e6af",
"assets/assets/lotties/drone_spray.json": "056dc9c010f255d3dcb747ea79ac3172",
"assets/assets/lotties/67783-drones-isometric-lottie-animation.json": "e2c7200cb5fcaa947928a7961499e763",
"assets/assets/lotties/drone_deliver.json:Zone.Identifier": "deb4451e8fcada5c77f4235462d5bd2f",
"assets/assets/lotties/26623-map-navigation.json:Zone.Identifier": "a52a3f5f91e20043e65a1a26dfc9c7d6",
"assets/assets/images/47956-area-map.png:Zone.Identifier": "2f2a07faa28a27dd9d8e5cf72ec24282",
"assets/assets/images/c2a.jpg": "101276735a2b02705346ffc8074ee064",
"assets/assets/images/42667-drone-with-package.png": "831ea061bba79b0eede07005ea382942",
"assets/assets/images/113610-teacher.png": "5803c5006a3780b7ddda25572e164ae3",
"assets/assets/images/c2a.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/bbl_b.JPG": "7a8af06468b2615d89a951625183756c",
"assets/assets/images/21233-teacher.png": "15db4cb204bf794aee339598561548e5",
"assets/assets/images/56301-marriage-couple-hugging.png:Zone.Identifier": "27effa6a76d73a56805bb31a4d1201fd",
"assets/assets/images/65176-drone.png": "3483b375aec62dbea366d8badf378fe7",
"assets/assets/images/wra5.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/drone_pilot.png:Zone.Identifier": "f5b91a8ad964d24cef671076f265cbc7",
"assets/assets/images/98149-sending-mail.png:Zone.Identifier": "133032142348fe0fd4b12982e32c78ab",
"assets/assets/images/105682-geo-position-location.png": "d1b68b5a2d8762a27eb159516ef6b08a",
"assets/assets/images/c1.png": "262bd36fdbe7d64fb22784d95c87dd78",
"assets/assets/images/98149-sending-mail.png": "b874365c39c7951b1eaa145755dfae60",
"assets/assets/images/wra3.jpg": "f0eda2ed1cbed84fdcf4d25adb0e7da8",
"assets/assets/images/stc_a.jpg": "b24c5c989c8a47f837da97bd541ebd75",
"assets/assets/images/stc_c.JPG": "974ef1b6f7e8d55266e28962e0a9812d",
"assets/assets/images/drone_pilot.png": "d2d951261d5916f0b02344c145d6a9db",
"assets/assets/images/WhatsApp%2520Image%25202022-11-06%2520at%252019.21.01.jpg": "7f39b00cf73fbef87260edad2c1bb6ac",
"assets/assets/images/64126-drone-sketch-animation.png": "9fc59c59cc78d22b4485a7f9a48f12c4",
"assets/assets/images/29289-drone.png:Zone.Identifier": "ced2b83f390014488c4b7979ebd748c3",
"assets/assets/images/mlwt_a.jpg": "31c93a4cb5b5c31cf9669fedd55804bd",
"assets/assets/images/wra3.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/18199-location-pin-on-a-map.png:Zone.Identifier": "9272cc0e24bf15039aa8c392b5f6b775",
"assets/assets/images/29289-drone.png": "c2cad57b02788aaf06ad9da1cd10a681",
"assets/assets/images/ab6.jpg": "0964110946647a22ce3c4c536e8bc716",
"assets/assets/images/mle.png": "bea7cac41f7dd83418c30854ef9a78d3",
"assets/assets/images/freddy_b.jpg": "a4d108113e95494e32147d019d757def",
"assets/assets/images/freddy_c.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/47956-area-map.png": "88b196b3feb136670557d78a66c6fe0a",
"assets/assets/images/86094-drone-fork.png:Zone.Identifier": "d917254d5b02af8da3a51438109d8f1f",
"assets/assets/images/c2.png": "ff1397fae235f81adb3a698f180009c2",
"assets/assets/images/105682-geo-position-location.png:Zone.Identifier": "c9f3127f035c72bff52ec065b72e2127",
"assets/assets/images/mlwt_b.jpg": "e36ce40f094008ba0a97bd554ec1787c",
"assets/assets/images/64700-drone.png": "8e03df21d30ecba843ee9d55189ef0a8",
"assets/assets/images/65176-drone.png:Zone.Identifier": "eaae154b97d04e543c511ab6cc58b722",
"assets/assets/images/ab3b.png": "2a6e2108bf1a3377db39fb74bb573e61",
"assets/assets/images/dbAa.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/ab1.jpg": "7f39b00cf73fbef87260edad2c1bb6ac",
"assets/assets/images/c2.png:Zone.Identifier": "47bec3b794368ac34ad85f6f1071bb55",
"assets/assets/images/freddy_a.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/dbAa.jpg": "c0067c078612a353905d447de30e3bd9",
"assets/assets/images/mld.png": "b11d7c659127f81553e1a892edbd91eb",
"assets/assets/images/stc_d.JPG": "93793df6b500c623ec32603af0d99833",
"assets/assets/images/86094-drone-fork.png": "424be33a1e4a4c272d934df8083eb407",
"assets/assets/images/freddy_d.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/c2%2520(Medium).jpg": "9466806d4f7fa989abb77322e195ab6f",
"assets/assets/images/ab3.jpg": "39005aed19ae5ba2cad33a04fa14eb0f",
"assets/assets/images/cmo.jpg": "defa18187e11c67c2b338ff550d26977",
"assets/assets/images/bba.png": "b65c01835559871d53a9d245443e6330",
"assets/assets/images/mltglb_a.JPG": "31fdf74d5f4d38e8b205f951ffcb1c90",
"assets/assets/images/65718-drone.png": "68cdd181deed52de26cc2cc21441156f",
"assets/assets/images/27225-drone-and-remote.png:Zone.Identifier": "9cffd266b4959865a7ea91e7e90f16f2",
"assets/assets/images/wra1.jpg": "e30ee97af22bf2e1ed333b5aec99caa0",
"assets/assets/images/mltglb_e.JPG": "4bd1378c658b7b24a3c772956e0249bb",
"assets/assets/images/freddy_b.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/stcc.png": "9eddb3276aa88611d8af13d1e874fdfb",
"assets/assets/images/cfo.jpg": "7191670ec3df991795bfeaf022920261",
"assets/assets/images/ab1-transformed.png": "72e7e85a16c0a5b3efd1a19662e6c1bb",
"assets/assets/images/26623-map-navigation.png": "7ef4868578bfa8db1ab6ff31428cdc70",
"assets/assets/images/21270-student.png:Zone.Identifier": "daaf50d01335d808662f362856a1a723",
"assets/assets/images/21233-teacher.png:Zone.Identifier": "a5d813e6c1a20942e484fdaa164f172b",
"assets/assets/images/wra4.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/wra6.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/123795-woman-sending-man-and-time-is-up.png:Zone.Identifier": "7de55f11d956fabae77e232ca214c742",
"assets/assets/images/mlc.png": "e96fc27d8fde15f12e411608d0031383",
"assets/assets/images/stc_e.jpg": "1700b73dbfe3bf59a6bfa5af067234c7",
"assets/assets/images/wra4.jpg": "964274a7189ac155930ba3a10b004998",
"assets/assets/images/coo.jpg": "836a15bdf50804a70d77d1f704eb5f82",
"assets/assets/images/GLOBHE-logo.png": "a87043e18352e168e00cc86e5e7c7e27",
"assets/assets/images/ab5.jpg": "6bd74ade7130f38b9657c00fe139fe7c",
"assets/assets/images/mltglb_c.JPG": "2a988862771234c1a0b151fa59e3953a",
"assets/assets/images/stc_f.jpg": "3e46e7386531a7d34f0ad6a466f764c8",
"assets/assets/images/d.jpg": "ef2781fd9683100fd33729b24d105ef0",
"assets/assets/images/freddy_c.jpg": "7e2bf853266246fdcd527253b1bb5832",
"assets/assets/images/123795-woman-sending-man-and-time-is-up.png": "a1189787e8d0fc5e3fa7276198d13e97",
"assets/assets/images/113610-teacher.png:Zone.Identifier": "e6b43690fae5d8a20f89c5c798760459",
"assets/assets/images/GLOBHE-logo.png:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/65718-drone.png:Zone.Identifier": "73da8dba75b372c2e50ec63ac2c7e4d2",
"assets/assets/images/56757-drone-photography.png": "e5c44701cba06ada0c1d4c0d62dc99a0",
"assets/assets/images/dbA.jpg": "95eda740b629f7b57b4ed5dda03117c4",
"assets/assets/images/56757-drone-photography.png:Zone.Identifier": "cf9f15aa1c25de8468e09178dc301080",
"assets/assets/images/bbb.png": "34abb7f21532496a7100cc77db6bb6cf",
"assets/assets/images/56301-marriage-couple-hugging.png": "aa03841492eef587a6a515e52a168a08",
"assets/assets/images/c1.png:Zone.Identifier": "ad0e01075c9babeb5116b823bb7bedfd",
"assets/assets/images/bbl_a.JPG": "aa58e9d4a7745bb4aea1e7ca1356024f",
"assets/assets/images/ab1b.png": "da804840c0445e5f6ac19989542f5859",
"assets/assets/images/27225-drone-and-remote.png": "38f9eb19e2556d98a09dfa36a2433576",
"assets/assets/images/Coat_of_arms_of_Malawi.png": "2392f2ad0302ae9c15f6413f873d8214",
"assets/assets/images/mltglb_b.JPG": "d02297b55e467f0c9fc8c446fdfbb8d8",
"assets/assets/images/mlb.png": "54fe4758ebf0b1faa3b120658c605c65",
"assets/assets/images/18199-location-pin-on-a-map.png": "afe323215a2d5e84cc910b058f1b795e",
"assets/assets/images/21270-student.png": "eed181d91896bbe8a1fe6860b4c26475",
"assets/assets/images/ab7.jpg": "51ddbbca82732a8c617f421a428aa907",
"assets/assets/images/70040-drone-machine-fault.png": "23452100bc7f63bb955cb217faf41d5f",
"assets/assets/images/mltglb_f.png": "290f322616d7760d30b7e7277b92ae55",
"assets/assets/images/wra2.jpg": "0d969ce87762de68c2abc1b25396e59d",
"assets/assets/images/64700-drone.png:Zone.Identifier": "efdf9b8d7c8e1548e89b913cab6cd492",
"assets/assets/images/mla.png": "b25749f24bbfc9b301dd46ccf24ad980",
"assets/assets/images/26623-map-navigation.png:Zone.Identifier": "ea41121a455db640c608bf75845f6be9",
"assets/assets/images/freddy_a.jpg": "2bb43fffe993cd9fc59a4309f282b776",
"assets/assets/images/ab1-transformed.png:Zone.Identifier": "1766c8510622eb5e2eb26cc15494ee80",
"assets/assets/images/dbA%2520(Medium).jpg": "995635b3577dd44609bfb90fc2fa1792",
"assets/assets/images/mltglb_d.JPG": "5e02e8c46259bdb5e4b30331a834345e",
"assets/assets/images/wra1.jpg:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/ab2.jpg": "1eb5c39da38b60c6efd52bfc88a250f4",
"assets/assets/images/stc_b.jpg": "4149a341ad57985191ae7d67ca52f49c",
"assets/assets/images/70040-drone-machine-fault.png:Zone.Identifier": "e6623b83549d38c62df7e0140b917f01",
"assets/assets/images/ab4.jpg": "adaa7cccb87cf1c8e5b9197b6f0f8372",
"assets/assets/images/stcd.png": "f36c7f321bc2c0480e896b7e029f6b7e",
"assets/assets/images/Coat_of_arms_of_Malawi.svg.png:Zone.Identifier": "fbccf14d504b7b2dbcb5a5bda75bd93b",
"assets/assets/images/c.jpg": "e3cd0e4bed5e84083f2253f58c076c67",
"assets/assets/images/42667-drone-with-package.png:Zone.Identifier": "af0f67576839fd2b3253f7fcd174e355",
"assets/assets/images/freddy_d.jpg": "7ce144d8e36bfa31d410ddff28b802a2",
"assets/assets/images/dbA%2520(Small).jpg": "ae90cda127fc90e982d10710f47d8a84",
"assets/assets/images/ceo.jpg": "4e79d31c8b38f6c48baadd348d7be3a9",
"assets/AssetManifest.json": "14d0135c6309413b22377bcd41aac044",
"assets/FontManifest.json": "015e260973c68cf5991c35dbd370a2e9",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"splash/style.css": "78eb41694f0471d01d193d193496f4c8",
"splash/img/dark-1x.png": "57ec56a825a26c69f13738ebdf98da9a",
"splash/img/light-1x.png": "57ec56a825a26c69f13738ebdf98da9a",
"splash/img/dark-3x.png": "379422a49cb6054aa80019921cb314ea",
"splash/img/dark-4x.png": "a473a80e3ad69536ae1c26dba7980c84",
"splash/img/light-2x.png": "2ae8b18097b4675cd996e772b71802a3",
"splash/img/dark-2x.png": "2ae8b18097b4675cd996e772b71802a3",
"splash/img/light-4x.png": "a473a80e3ad69536ae1c26dba7980c84",
"splash/img/light-3x.png": "379422a49cb6054aa80019921cb314ea",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"index.html": "8974e53b6c6d9a160f9e19f4f4182270",
"/": "8974e53b6c6d9a160f9e19f4f4182270"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
