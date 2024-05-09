{
    "free": {
        "fullscreen": {
            "version": {
                "fr": "1.1.58",
                "to": "1.1.92"
            },
            "match": "(return|.=.=>)\"free\"===(.+?)(return|.=.=>)\"premium\"===",
            "replace": "$1\"premium\"===$2$3\"free\"==="
        },
        "audioads": {
            "version": {
                "fr": "1.1.58",
                "to": "1.1.92"
            },
            "match": "(case .:|async enable\\(.\\){)(this.enabled=.+?\\(.{1,3},\"audio\"\\),|return this.enabled=...+?\\(.{1,3},\"audio\"\\))((;case 4:)?this.subscription=this.audioApi).+?this.onAdMessage\\)",
            "replace": "$1$3.cosmosConnector.increaseStreamTime(-100000000000)"
        },
        "emptyblock": {
            "version": {
                "fr": "1.1.58",
                "to": ""
            },
            "match": "adsEnabled:!0",
            "replace": "adsEnabled:!1"
        },
        "playlistsponsor": {
            "version": {
                "fr": "1.1.58",
                "to": ""
            },
            "match": "allSponsorships",
            "replace": ""
        },
        "connectold": {
            "version": {
                "fr": "1.1.70",
                "to": "1.1.92"
            },
            "match": [
                " connect-device-list-item--disabled",
                "connect-picker.unavailable-to-control",
                "(\"button\",{className:.,disabled:)(..)"
            ],
            "replace": [
                "",
                "spotify-connect",
                "$1false"
            ]
        },
        "downloadquality": {
            "version": {
                "fr": "1.1.70",
                "to": "1.2.29"
            },
            "match": "(\\(.,..jsxs\\)\\(.{1,3}|(.\\(\\).|..)createElement\\(.{1,4}),{(filterMatchQuery|filter:.,title|(variant:\"viola\",semanticColor:\"textSubdued\"|..:\"span\",variant:.{3,6}mesto,color:.{3,6}),htmlFor:\"desktop.settings.downloadQuality.+?).{1,6}get\\(\"desktop.settings.downloadQuality.title.+?(children:.{1,2}\\(.,.\\).+?,|\\(.,.\\){3,4},|,.\\)}},.\\(.,.\\)\\),)",
            "replace": ""
        }
    },
    "others": {
      "discriptions": {
        "version": {
          "fr": "1.1.70",
          "to": ""
        },
        "match": "((..createElement|children:\\(.{1,7}\\))\\(.{1,7},{source:).{1,7}get\\(\"about.copyright\",.\\),paragraphClassName:.}\\)",
        "replace": "<h3>More about SpotPearl</h3><br><details><summary>{0} Github</summary><a href='https://github.com/SpotX-Official/SpotX'>SpotPearl-Windows</a><br><a href='https://github.com/SpotX-Official/SpotX-Bash'>SpotPearl-Mac/Linux</a><br><br/></details><details><summary>{1} Telegram</summary><a href='https://t.me/SpotxCommunity'>SpotPearl Community</a><br><a href='https://t.me/spotify_windows_mod'>SpotPearl Channel</a><br><br/></details><details><summary>{2} FAQ</summary><a href='https://te.legra.ph/SpotX-FAQ-09-19'>Windows</a><br><a href='https://github.com/jetfir3/SpotX-Bash/wiki/SpotX%E2%80%90Bash-FAQ'>Mac/Linux</a></details><br><h4>DISCLAIMER</h4>SpotPearl is a modified version of the official Spotify client, provided as an evaluation version, you use it at your own risk.",
        "svgtg": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path id='telegram-1' d='M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z' fill='#fff'/></svg>",
        "svggit": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' fill='#fff'/></svg>",
        "svgfaq": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z' fill='#fff'/></svg>"
      },
        "ForcedExp": {
            "version": {
                "fr": "1.1.79",
                "to": ""
            },
            "match": "(configuration:(.).getRemoteConfiguration.+?;)",
            "replace": "$1const EnableExp=[],DisableExp=[],CustomExp=[],allExperiments=[EnableExp,DisableExp,CustomExp];allExperiments.forEach((expArray)=>{const values=$2.getRemoteConfiguration()?.values;if(values){expArray.forEach((exp)=>{if(expArray===EnableExp||expArray===DisableExp){values.set(exp,expArray===EnableExp);}else if(expArray===CustomExp){values.set(exp.name,exp.value);}});(window.Spotx??={}).RemoteExp=values}});"
        },
        "DisableExp": {
            "InAppMessaging": {
                "name": "enableInAppMessaging",
                "description": "Disable pop-up window for premium account purchase",
                "native_description": "Enables quicksilver in-app messaging modal",
                "version": {
                    "fr": "1.1.70",
                    "to": ""
                }
            },
            "ContentInformationMessage": {
                "name": "enableContentInformationMessage",
                "description": "Disable covid messages between podcasts",
                "native_description": "Enable showing content information messages for episodes",
                "version": {
                    "fr": "1.1.78",
                    "to": ""
                }
            },
            "PickShuffle": {
                "name": "enablePickAndShuffle",
                "description": "Removes restrictions on using the queue and listening to tracks in order",
                "native_description": "Enable pick and shuffle",
                "version": {
                    "fr": "1.1.85",
                    "to": ""
                }
            },
            "MusicLeavebehinds": {
                "name": "enableDesktopMusicLeavebehinds",
                "description": "Disabling ad blocks in playlists",
                "native_description": "Enable music leavebehinds on eligible playlists for desktop",
                "version": {
                    "fr": "1.2.10",
                    "to": ""
                }
            },
            "HptoLocationRefactor": {
                "name": "enableHptoLocationRefactor",
                "description": "Disabling in some cases the banner on the main page",
                "native_description": "Enable new permanent location for HPTO iframe to HptoHtml.js",
                "version": {
                    "fr": "1.2.1",
                    "to": "1.2.20"
                }
            },
            "UserFraudSignals": {
                "name": "enableUserFraudSignals",
                "description": "presumably protection against bots (reCAPTCHA)",
                "native_description": "Enable user fraud signals",
                "version": {
                    "fr": "1.2.10",
                    "to": ""
                }
            },
            "UserFraudVerificationRequest": {
                "name": "enableUserFraudVerificationRequest",
                "description": "presumably protection against bots (reCAPTCHA)",
                "native_description": "Enable the IAV component make api requests",
                "version": {
                    "fr": "1.2.5",
                    "to": ""
                }
            },
            "UserFraudVerification": {
                "name": "enableUserFraudVerification",
                "description": "presumably protection against bots (reCAPTCHA)",
                "native_description": "Enable user fraud verification",
                "version": {
                    "fr": "1.2.3",
                    "to": ""
                }
            },
            "UserFraudCspViolation": {
                "name": "enableUserFraudCspViolation",
                "description": "Enable CSP violation detection",
                "native_description": "Enable CSP violation detection",
                "version": {
                    "fr": "1.2.17",
                    "to": ""
                }
            },
            "EsperantoMigration": {
                "name": "enableEsperantoMigration",
                "description": "presumably, the advertising management transition from Cosmos to Esperanto",
                "native_description": "Enable esperanto Migration for Ad Formats",
                "version": {
                    "fr": "1.2.6",
                    "to": ""
                }
            },
            "RightSidebarMerchFallback": {
                "name": "enableRightSidebarMerchFallback",
                "description": "Allow merch to fallback to artist level merch if track level does not exist",
                "native_description": "Allow merch to fallback to artist level merch if track level does not exist",
                "version": {
                    "fr": "1.2.5",
                    "to": "1.2.11"
                }
            },
            "ReportAudiobooks": {
                "name": "enableReportAudiobooks",
                "description": "Enable Report action for audiobooks",
                "native_description": "Enable Report action for audiobooks",
                "version": {
                    "fr": "1.1.97",
                    "to": ""
                }
            },
            "ReportPodcastShows": {
                "name": "enableReportPodcastShows",
                "description": "Enable Report action for podcast shows",
                "native_description": "Enable Report action for podcast shows",
                "version": {
                    "fr": "1.2.12",
                    "to": ""
                }
            },
            "ReportPodcastEpisodes": {
                "name": "enableReportPodcastEpisodes",
                "description": "Enable Report action for podcast episodes",
                "native_description": "Enable Report action for podcast episodes",
                "version": {
                    "fr": "1.2.12",
                    "to": ""
                }
            },
            "ReportAudiobookChapters": {
                "name": "enableReportAudiobookChapters",
                "description": "Enable Report action for audiobook chapters",
                "native_description": "Enable Report action for audiobook chapters",
                "version": {
                    "fr": "1.2.12",
                    "to": ""
                }
            },
            "Dsa": {
                "name": "enableDsa",
                "description": "Enable showing DSA (Digital Services Act) context menu and modal for ads",
                "native_description": "Enable showing DSA (Digital Services Act) context menu and modal for ads",
                "version": {
                    "fr": "1.2.12",
                    "to": "1.2.19"
                }
            },
            "Dsa2": {
                "name": "enableDsaAds",
                "description": "Enable showing DSA (Digital Services Act) context menu and modal for ads",
                "native_description": "Enable showing DSA (Digital Services Act) context menu and modal for ads",
                "version": {
                    "fr": "1.2.20",
                    "to": ""
                }
            },
            "Dsa3": {
                "name": "enableDSASetting",
                "description": "Enable DSA (Digital Service Act) features for desktop and web",
                "native_description": "Enable DSA (Digital Service Act) features for desktop and web",
                "version": {
                    "fr": "1.2.20",
                    "to": ""
                }
            },
            "NewAdsNpv": {
                "name": "enableNewAdsNpv",
                "description": "Enable showing new ads NPV",
                "native_description": "Enable showing new ads NPV",
                "version": {
                    "fr": "1.2.18",
                    "to": ""
                }
            },
            "NewAdsNpvVideoTakeover": {
                "name": "enableNewAdsNpvVideoTakeover",
                "description": "Enable redesigned VideoTakeover for new ads NPV",
                "native_description": "Enable redesigned VideoTakeover for new ads NPV",
                "version": {
                    "fr": "1.2.18",
                    "to": ""
                }
            },
            "NewAdsNpvColorExtraction": {
                "name": "enableNewAdsNpvColorExtraction",
                "description": "Enable CTA card color extraction for new ads NPV",
                "native_description": "Enable CTA card color extraction for new ads NPV",
                "version": {
                    "fr": "1.2.18",
                    "to": ""
                }
            },
            "AudiobookAdExclusivity": {
                "name": "enableAudiobookAdExclusivity",
                "description": "Enable Audiobook Ad Formats Exclusivity",
                "native_description": "Enable Audiobook Ad Formats Exclusivity",
                "version": {
                    "fr": "1.2.19",
                    "to": ""
                }
            },
            "NewAdsNpvNewVideoTakeoverSlot": {
                "name": "enableNewAdsNpvNewVideoTakeoverSlot",
                "description": "Enable new modal slot to position redesigned new ads NPV VideoTakeover above all areas except RightSidebar and NPB",
                "native_description": "Enable new modal slot to position redesigned new ads NPV VideoTakeover above all areas except RightSidebar and NPB",
                "version": {
                    "fr": "1.2.22",
                    "to": ""
                }
            },
            "FraudLoadSignals": {
                "name": "enableFraudLoadSignals",
                "description": "Enable user fraud signals emitted on page load",
                "native_description": "Enable user fraud signals emitted on page load",
                "version": {
                    "fr": "1.2.22",
                    "to": ""
                }
            },
            "GabitoAdEvent": {
                "name": "enableGabitoAdEvent",
                "description": "Use Gabito AdEvent instead of Gabo AdEvent",
                "native_description": "Use Gabito AdEvent instead of Gabo AdEvent",
                "version": {
                    "fr": "1.1.93",
                    "to": "1.2.25"
                }
            },
            "YourListeningUpsell": {
                "name": "enableYourListeningUpsell",
                "description": "Enable Your Listening Upsell Banner for free & unauth users",
                "native_description": "Enable Your Listening Upsell Banner for free & unauth users",
                "version": {
                    "fr": "1.2.25",
                    "to": ""
                }
            },
            "podcast-ads": {
                "name": "podcastads-ads_npb",
                "description": "Enable the podcast ads Now Playing Bar experience, including features like the podcast ad Now Playing Bar hat",
                "native_description": "Enable the podcast ads Now Playing Bar experience, including features like the podcast ad Now Playing Bar hat",
                "version": {
                    "fr": "1.1.70",
                    "to": ""
                }
            },
            "podcast-episode": {
                "name": "podcastaudioplus-episode_entity",
                "description": "Enable the Sponsored By section on the Episode Page with Call to Action cards",
                "native_description": "Enable the Sponsored By section on the Episode Page with Call to Action cards",
                "version": {
                    "fr": "1.1.70",
                    "to": ""
                }
            },
            "podcast-show_page": {
                "name": "podcastaudioplus-show_page",
                "description": "Enable show sponsors section on the Show Page",
                "native_description": "Enable show sponsors section on the Show Page",
                "version": {
                    "fr": "1.1.70",
                    "to": ""
                }
            },
            "betamaxAutoSeekToAdPosition": {
                "name": "AutoSeekToAdPosition",
                "description": "If true, the player will seek to the ad position when an stop position is registered. Usefull for debugging ads.",
                "native_description": "If true, the player will seek to the ad position when an stop position is registered. Usefull for debugging ads.",
                "version": {
                    "fr": "1.2.26",
                    "to": ""
                }
            },
            "PodcastSponsoredContent": {
                "name": "enablePodcastSponsoredContent",
                "description": "Enable sponsored content information for podcasts",
                "native_description": "Enable sponsored content information for podcasts",
                "version": {
                    "fr": "1.2.26",
                    "to": ""
                }
            },
            "HomeAds": {
                "name": "enableHomeAds",
                "description": "Enable Fist Impression Takeover ads on Home Page",
                "native_description": "Enable Fist Impression Takeover ads on Home Page",
                "version": {
                    "fr": "1.2.31",
                    "to": ""
                }
            },
            "LearningHomeCard": {
                "name": "enableLearningHomeCard",
                "description": "Enable Learning Home Card",
                "native_description": "Enable Learning Home Card",
                "version": {
                    "fr": "1.2.31",
                    "to": ""
                }
            },
            "BillboardEsperantoMigration": {
                "name": "enableBillboardEsperantoMigration",
                "description": "Enable esperanto migration for Billboard Ad Format",
                "native_description": "Enable esperanto migration for Billboard Ad Format",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "LeaderboardEsperantoMigration": {
                "name": "enableEsperantoMigrationLeaderboard",
                "description": "Enable esperanto Migration for Leaderboard Ad Format",
                "native_description": "Enable esperanto Migration for Leaderboard Ad Format",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "SponsoredPlaylistEsperantoMigration": {
                "name": "enableSponsoredPlaylistEsperantoMigration",
                "description": "Enable esperanto Migration for Sponsored Playlist Ad Formats",
                "native_description": "Enable esperanto Migration for Sponsored Playlist Ad Formats",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "PipImpressionLogging": {
                "name": "enablePipImpressionLogging",
                "description": "Enables impression logging for PiP",
                "native_description": "Enables impression logging for PiP",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "SwitchingBetweenHomeAdsAndHpto": {
                "name": "allowSwitchingBetweenHomeAdsAndHpto",
                "description": "Allow switching between the new Home Ads format and legacy HPTO format (as opposed to only showing the legacy HPTO format)",
                "native_description": "Allow switching between the new Home Ads format and legacy HPTO format (as opposed to only showing the legacy HPTO format)",
                "version": {
                    "fr": "1.2.34",
                    "to": ""
                }
            },
            "LyricsUpsell": {
                "name": "enableLyricsUpsell",
                "description": "Enable Lyrics Upsell",
                "native_description": "Enable Lyrics Upsell",
                "version": {
                    "fr": "1.2.36",
                    "to": ""
                }
            },
            "ArtistNPVImpressionsLogging": {
                "name": "enableArtistNPVImpressions",
                "description": "Enables impression logging for the Artist About section in NPV",
                "native_description": "Enables impression logging for the Artist About section in NPV",
                "version": {
                    "fr": "1.2.37",
                    "to": ""
                }
            },
            "SpotlightImpressionLogging": {
                "name": "enableSpotlightImpressionLogging",
                "description": "Enables impression logging for Spotlight",
                "native_description": "Enables impression logging for Spotlight",
                "version": {
                    "fr": "1.2.37",
                    "to": ""
                }
            }
        },
        "EnableExp": {
            "HomeViaGraphQLV2": {
                "name": "enableHomeViaGraphQLV2",
                "description": "Enable fetching Home via GraphQL",
                "native_description": "Enable fetching Home via GraphQL",
                "version": {
                    "fr": "1.1.86",
                    "to": "1.1.92"
                }
            },
            "BrowseViaPathfinder": {
                "name": "enableBrowseViaPathfinder",
                "description": "Fixes a bug on the genres page",
                "native_description": "Fetch Browse data from Pathfinder",
                "version": {
                    "fr": "1.1.88",
                    "to": "1.2.24"
                }
            },
            "EnhanceLikedSongs": {
                "name": "enableEnhanceLikedSongs",
                "description": "Enable Enhance Liked Songs UI and functionality",
                "native_description": "Enable Enhance Liked Songs UI and functionality",
                "version": {
                    "fr": "1.1.86",
                    "to": "1.2.25"
                }
            },
            "EnhancePlaylist": {
                "name": "enableEnhancePlaylistProd",
                "description": "Enable Enhance Playlist UI and functionality for end-users",
                "native_description": "Enable Enhance Playlist UI and functionality for end-users",
                "version": {
                    "fr": "1.1.84",
                    "to": "1.2.25"
                }
            },
            "IgnoreInRecommendations": {
                "name": "enableIgnoreInRecommendations",
                "description": "Exclude playlists from recommendations",
                "native_description": "Enable Ignore In Recommendations for desktop and web",
                "version": {
                    "fr": "1.1.87",
                    "to": ""
                }
            },
            "Equalizer": {
                "name": "enableEqualizer",
                "description": "Enable audio equalizer for Desktop and Web Player",
                "native_description": "Enable audio equalizer for Desktop and Web Player",
                "version": {
                    "fr": "1.1.88",
                    "to": ""
                }
            },
            "CarouselsOnHome": {
                "name": "enableCarouselsOnHome",
                "description": "Directly related to the blocking of podcasts and sections similar to ads on the main page",
                "native_description": "Use carousels on Home",
                "version": {
                    "fr": "1.1.93",
                    "to": "1.2.25"
                }
            },
            "AttackOnTitanEaster": {
                "name": "enableAttackOnTitanEasterEgg",
                "description": "Enable Attack on Titan Easter egg turning progress bar red when playing official soundtrack",
                "native_description": "Enable Attack on Titan Easter egg turning progress bar red when playing official soundtrack",
                "version": {
                    "fr": "1.2.6",
                    "to": ""
                }
            },
            "AlbumReleaseAnniversaries": {
                "name": "enableAlbumReleaseAnniversaries",
                "description": "Enable showing balloons on album release date anniversaries",
                "native_description": "Enable showing balloons on album release date anniversaries",
                "version": {
                    "fr": "1.1.89",
                    "to": ""
                }
            },
            "MadeForYou": {
                "name": "enableMadeForYouEntryPoint",
                "description": "Show 'Made For You' entry point in the left sidebar",
                "native_description": "Show 'Made For You' entry point in the left sidebar",
                "version": {
                    "fr": "1.1.70",
                    "to": "1.1.95"
                }
            },
            "ClearAllDownloads": {
                "name": "enableClearAllDownloads",
                "description": "Enable option in settings to clear all downloads",
                "native_description": "Enable option in settings to clear all downloads",
                "version": {
                    "fr": "1.1.92",
                    "to": "1.1.98"
                }
            },
            "LeftSidebar": {
                "name": "enableYLXSidebar",
                "description": "Enable Your Library X view of the left sidebar",
                "native_description": "Enable Your Library X view of the left sidebar",
                "version": {
                    "fr": "1.2.0",
                    "to": "1.2.14"
                }
            },
            "RightSidebar": {
                "name": "enableRightSidebar",
                "description": "Enable the view on the right sidebar",
                "native_description": "Enable the view on the right sidebar",
                "version": {
                    "fr": "1.1.98",
                    "to": "1.2.23"
                }
            },
            "AddPlaylistToPlaylist": {
                "name": "enableAddPlaylistToPlaylist",
                "description": "Enable support for adding a playlist to another playlist",
                "native_description": "Enable support for adding a playlist to another playlist",
                "version": {
                    "fr": "1.1.98",
                    "to": "1.2.3"
                }
            },
            "RightSidebarLyrics": {
                "name": "enableRightSidebarLyrics",
                "description": "Show lyrics in the right sidebar (disables lyrics on bottom bar)",
                "native_description": "Show lyrics in the right sidebar",
                "version": {
                    "fr": "1.2.0",
                    "to": ""
                }
            },
            "RightSidebarColors": {
                "name": "enableRightSidebarExtractedColors",
                "description": "Extract background color based on artwork image",
                "native_description": "Extract background color based on artwork image",
                "version": {
                    "fr": "1.2.1",
                    "to": ""
                }
            },
            "SilenceTrimmer": {
                "name": "enableSilenceTrimmer",
                "description": "Enable silence trimming in podcasts",
                "native_description": "Enable silence trimming in podcasts",
                "version": {
                    "fr": "1.1.99",
                    "to": ""
                }
            },
            "PlaybackSpeedIncrements": {
                "name": "enableSmallPlaybackSpeedIncrements",
                "description": "playback speed range from 0.5-3.5 with every 0.1 increment (in podcasts)",
                "native_description": "playback speed range from 0.5-3.5 with every 0.1 increment",
                "version": {
                    "fr": "1.2.0",
                    "to": "1.2.14"
                }
            },
            "ShowFollowsSetting": {
                "name": "enableShowFollowsSetting",
                "description": "Enable a setting to control if followers and following lists are shown on profile",
                "native_description": "Enable a setting to control if followers and following lists are shown on profile",
                "version": {
                    "fr": "1.2.1",
                    "to": ""
                }
            },
            "RightSidebarCredits": {
                "name": "enableRightSidebarCredits",
                "description": "Show credits in the right sidebar",
                "native_description": "Show credits in the right sidebar",
                "version": {
                    "fr": "1.2.7",
                    "to": "1.2.25"
                }
            },
            "WhatsNewFeed": {
                "name": "enableWhatsNewFeed",
                "description": "Enable the what's new feed panel",
                "native_description": "Enable the what's new feed panel",
                "version": {
                    "fr": "1.2.12",
                    "to": "1.2.16"
                }
            },
            "WhatsNewFeedMainView": {
                "name": "enableWhatsNewFeedMainView",
                "description": "Enable Whats new feed in the main view",
                "native_description": "Enable Whats new feed in the main view",
                "version": {
                    "fr": "1.2.17",
                    "to": ""
                }
            },
            "RightSidebarArtistEnhanced": {
                "name": "enableRightSidebarArtistEnhanced",
                "description": "Enable Artist about V2 section in NPV",
                "native_description": "Enable Artist about V2 section in NPV",
                "version": {
                    "fr": "1.2.16",
                    "to": ""
                }
            },
            "NewEntityHeaders": {
                "name": "enableNewEntityHeaders",
                "description": "Enable New Entity Headers",
                "native_description": "Enable New Entity Headers",
                "version": {
                    "fr": "1.2.15",
                    "to": "1.2.27"
                }
            },
            "ReadAlongTranscripts": {
                "name": "enableReadAlongTranscripts",
                "description": "Enable read along transcripts in the NPV",
                "native_description": "Enable read along transcripts in the NPV",
                "version": {
                    "fr": "1.2.17",
                    "to": ""
                }
            },
            "TogglePlaylistColumns": {
                "name": "enableTogglePlaylistColumns",
                "description": "Enable ability to toggle playlist column visibility",
                "native_description": "Enable ability to toggle playlist column visibility",
                "version": {
                    "fr": "1.2.17",
                    "to": ""
                }
            },
            "RightSidebarTransitionAnimations": {
                "name": "enableRightSidebarTransitionAnimations",
                "description": "Enable the slide-in/out transition on the right sidebar",
                "native_description": "Enable the slide-in/out transition on the right sidebar",
                "version": {
                    "fr": "1.2.8",
                    "to": "1.2.33"
                }
            },
            "YLXEnhancements": {
                "name": "enableYLXEnhancements",
                "description": "Enable Your Library X Enhancements",
                "native_description": "Enable Your Library X Enhancements",
                "version": {
                    "fr": "1.2.18",
                    "to": ""
                }
            },
            "SmallerLineHeight": {
                "name": "enableSmallerLineHeight",
                "description": "Enable line height 1.5 on the <body />",
                "native_description": "Enable line height 1.5 on the <body />",
                "version": {
                    "fr": "1.2.18",
                    "to": "1.2.23"
                }
            },
            "ConcertsInterested": {
                "name": "enableConcertsInterested",
                "description": "Enable Save and Retrieve feature for concerts",
                "native_description": "Enable Save and Retrieve feature for concerts",
                "version": {
                    "fr": "1.2.7",
                    "to": ""
                }
            },
            "ConcertsForThisIsPlaylist": {
                "name": "enableConcertsForThisIsPlaylist",
                "description": "Enable Tour Card on This is Playlist",
                "native_description": "Enable Tour Card on This is Playlist",
                "version": {
                    "fr": "1.2.11",
                    "to": ""
                }
            },
            "RemoteDownloads": {
                "name": "enableRemoteDownloads",
                "description": "Enable remote download support through the offline2 system",
                "native_description": "Enable Tour Card on This is Playlist",
                "version": {
                    "fr": "1.2.8",
                    "to": ""
                }
            },
            "AlbumCoverArtModal": {
                "name": "enableAlbumCoverArtModal",
                "description": "Enable the cover art modal on the Album page",
                "native_description": "Enable the cover art modal on the Album page",
                "version": {
                    "fr": "1.2.13",
                    "to": ""
                }
            },
            "SmartShuffle": {
                "name": "enableSmartShuffle",
                "description": "Enable Smart Shuffle in playlists",
                "native_description": "Enable Smart Shuffle",
                "version": {
                    "fr": "1.2.22",
                    "to": ""
                }
            },
            "ConcertsTicketPrice": {
                "name": "enableConcertsTicketPrice",
                "description": "Display ticket price on Event page",
                "native_description": "Display ticket price on Event page",
                "version": {
                    "fr": "1.2.15",
                    "to": ""
                }
            },
            "DynamicNormalizer": {
                "name": "enableDynamicNormalizer",
                "description": "Enable the dynamic normalizer/compressor",
                "native_description": "Enable the dynamic normalizer/compressor",
                "version": {
                    "fr": "1.2.14",
                    "to": ""
                }
            },
            "HeBringsNpb": {
                "name": "enableHeBringsNpb",
                "description": "he brings you playback progress",
                "native_description": "he brings you playback progress",
                "version": {
                    "fr": "1.2.14",
                    "to": ""
                }
            },
            "AlbumPrerelease": {
                "name": "enableAlbumPrerelease",
                "description": "Enable album prerelease pages",
                "native_description": "Enable album prerelease pages",
                "version": {
                    "fr": "1.2.18",
                    "to": ""
                }
            },
            "ButtonAlwaysVisible": {
                "name": "saveButtonAlwaysVisible",
                "description": "Display save button always in whats new feed",
                "native_description": "Display save button always in whats new feed",
                "version": {
                    "fr": "1.2.20",
                    "to": "1.2.27"
                }
            },
            "NpvAboutPodcast": {
                "name": "enableNpvAboutPodcast",
                "description": "Enable About Podcast section in  NPV",
                "native_description": "Enable About Podcast section in  NPV",
                "version": {
                    "fr": "1.2.20",
                    "to": ""
                }
            },
            "QueueOnRightPanel": {
                "name": "enableQueueOnRightPanel",
                "description": "Enable Queue on the right panel",
                "native_description": "Enable Queue on the right panel",
                "version": {
                    "fr": "1.2.26",
                    "to": ""
                }
            },
            "RecentlyPlayedShortcut": {
                "name": "enableRecentlyPlayedShortcut",
                "description": "Show Recently Played shortcut in home view. Also increase max number of shortcuts to 8",
                "native_description": "Show Recently Played shortcut in home view. Also increase max number of shortcuts to 8",
                "version": {
                    "fr": "1.2.21",
                    "to": "1.2.25"
                }
            },
            "EncoreCards": {
                "name": "enableEncoreCards",
                "description": "Enables all cards throughout app to be Encore Cards",
                "native_description": "Enables all cards throughout app to be Encore Cards",
                "version": {
                    "fr": "1.2.26",
                    "to": "1.2.33"
                }
            },
            "Plus": {
                "name": "enableAlignedCuration",
                "description": "it`s killing the heart icon, you`re able to save and choose the destination for any song, playlist, or podcast",
                "native_description": "Enable Aligned Curation",
                "version": {
                    "fr": "1.2.21",
                    "to": ""
                }
            },
            "ViewMode": {
                "name": "enableViewMode",
                "description": "Added compact mode to playlist",
                "native_description": "Enable list / compact mode in entity pages",
                "version": {
                    "fr": "1.2.24",
                    "to": ""
                }
            },
            "UserTopContent": {
                "name": "showUserTopContent",
                "description": "Show top tracks and top artists on profile page",
                "native_description": "Show top tracks and top artists on profile page",
                "version": {
                    "fr": "1.2.22",
                    "to": ""
                }
            },
            "EightShortcuts": {
                "name": "enableEightShortcuts",
                "description": "Increase max number of shortcuts on home to 8",
                "native_description": "Increase max number of shortcuts on home to 8",
                "version": {
                    "fr": "1.2.26",
                    "to": ""
                }
            },
            "NPVCredits": {
                "name": "enableNPVCredits",
                "description": "Show credits in the right sidebar",
                "native_description": "Show credits in the right sidebar",
                "version": {
                    "fr": "1.2.26",
                    "to": "1.2.26"
                }
            },
            "NPVCredits2": {
                "name": "enableNPVCreditsWithLinkability",
                "description": "Show credits in the right sidebar",
                "native_description": "Show credits in the right sidebar",
                "version": {
                    "fr": "1.2.27",
                    "to": ""
                }
            },
            "BanArtistAction": {
                "name": "enableBanArtistAction",
                "description": "Enable context menu action to ban/unban artists",
                "native_description": "Enable context menu action to ban/unban artists",
                "version": {
                    "fr": "1.2.27",
                    "to": ""
                }
            },
            "GlobalNavBar": {
                "name": "enableGlobalNavBar",
                "description": "Show global nav bar with home button, search input and user avatar",
                "native_description": "Show global nav bar with home button, search input and user avatar",
                "version": {
                    "fr": "1.2.27",
                    "to": "1.2.29"
                }
            },
            "NotificationCenter": {
                "name": "enableNotificationCenter",
                "description": "Enables notification center for desktop & web",
                "native_description": "Enables notification center for desktop & web",
                "version": {
                    "fr": "1.2.30",
                    "to": ""
                }
            },
            "DevicePickerSidePanel": {
                "name": "enableDevicePickerSidePanel",
                "description": "Enables Device Picker as a side panel",
                "native_description": "Enables Device Picker as a side panel",
                "version": {
                    "fr": "1.2.30",
                    "to": ""
                }
            },
            "Otfn": {
                "name": "enableOtfn",
                "description": "Enable On-The-Fly-Normalization",
                "native_description": "Enable On-The-Fly-Normalization",
                "version": {
                    "fr": "1.2.31",
                    "to": ""
                }
            },
            "FullscreenMode": {
                "name": "enableFullscreenMode",
                "description": "Enable fullscreen mode",
                "native_description": "Enable fullscreen mode",
                "version": {
                    "fr": "1.2.31",
                    "to": ""
                }
            },
            "NewConnectBar": {
                "name": "enableNewConnectBar",
                "description": "New Connect Bar without arrow and clickable elements",
                "native_description": "New Connect Bar without arrow and clickable elements",
                "version": {
                    "fr": "1.2.14",
                    "to": "1.2.35"
                }
            },
            "ResizableTracklistColumns": {
                "name": "enableResizableTracklistColumns",
                "description": "Enable resizable tracklist columns",
                "native_description": "Enable resizable tracklist columns",
                "version": {
                    "fr": "1.2.28",
                    "to": ""
                }
            },
            "QueueOnRightPanelAnimations": {
                "name": "enableQueueOnRightPanelAnimations",
                "description": "Enable animations for Queue on the right panel",
                "native_description": "Enable animations for Queue on the right panel",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "LikedSongsFilterTags": {
                "name": "enableLikedSongsFilterTags",
                "description": "Show filter tags on the Liked Songs entity view",
                "native_description": "Show filter tags on the Liked Songs entity view",
                "version": {
                    "fr": "1.2.29",
                    "to": ""
                }
            },
            "MiniPlayer": {
                "name": "enablePiPMiniPlayer",
                "description": "Enable the PiP Mini Player",
                "native_description": "Enable the PiP Mini Player",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "MiniPlayerVideo": {
                "name": "enablePiPMiniPlayerVideo",
                "description": "Enable playback of video inside the PiP Mini Player",
                "native_description": "Enable playback of video inside the PiP Mini Player",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "PremiumUserForMiniPlayer": {
                "name": "enablePremiumUserForMiniPlayer",
                "description": "Enables premium user flag for mini player",
                "native_description": "Enables premium user flag for mini player",
                "version": {
                    "fr": "1.2.32",
                    "to": ""
                }
            },
            "HomeSubfeeds": {
                "name": "enableHomeSubfeeds",
                "description": "Enable Subfeed filter chips on home",
                "native_description": "Enable Subfeed filter chips on home",
                "version": {
                    "fr": "1.2.23",
                    "to": ""
                }
            },
            "SidebarAnimations": {
                "name": "enableSidebarAnimations",
                "description": "Enable animations on the left and right on the sidebars and makes the right sidebar collapsible",
                "native_description": "Enable animations on the left and right on the sidebars and makes the right sidebar collapsible",
                "version": {
                    "fr": "1.2.34",
                    "to": ""
                }
            },
            "RightSidebarCollapsible": {
                "name": "enableRightSidebarCollapsible",
                "description": "Enable the right sidebar to collapse into the right margin",
                "native_description": "Enable the right sidebar to collapse into the right margin",
                "version": {
                    "fr": "1.2.34",
                    "to": ""
                }
            },
            "Spotlight": {
                "name": "enableSpotlight",
                "description": "adds a new section to the main page 'More like on...'",
                "native_description": "Enables the Spotlight component on home",
                "version": {
                    "fr": "1.2.37",
                    "to": ""
                }
            }
        },
        "CustomExp": {
            "SocialConnectOnDesktop": {
                "name": "enableSocialConnectOnDesktop",
                "description": "Enable the Social Connect API that powers group listening sessions for Desktop",
                "native_description": "Enable the Social Connect API that powers group listening sessions for Desktop",
                "value": "ENABLED",
                "version": {
                    "fr": "1.2.21",
                    "to": ""
                }
            },
            "SocialConnectOnDesktopWebPlayer": {
                "name": "enableSocialConnectOnDesktopWebPlayer",
                "description": "Enable the Social Connect API that powers group listening sessions for Desktop Web Player",
                "native_description": "Enable the Social Connect API that powers group listening sessions for Desktop Web Player",
                "value": "ENABLED",
                "version": {
                    "fr": "1.2.21",
                    "to": ""
                }
            },
            "MandalorianEaster": {
                "name": "enableMandalorianEasterEgg",
                "description": "Enable the Mandalorian easter-egg",
                "native_description": "Enable the Mandalorian easter-egg",
                "value": "HELMET_AND_SOUND",
                "version": {
                    "fr": "1.2.10",
                    "to": ""
                }
            },
            "NavAlt": {
                "name": "enableNavAltExperiment",
                "description": "Enable the new home structure and navigation",
                "native_description": "Enable the new home structure and navigation",
                "value": "ENABLED_CENTER",
                "version": {
                    "fr": "1.1.94",
                    "to": "1.1.96"
                }
            },
            "NavAlt2": {
                "name": "enableNavAltExperiment2",
                "description": "Enable the new home structure and navigation",
                "native_description": "Enable the new home structure and navigation",
                "value": "ENABLED_CENTER",
                "version": {
                    "fr": "1.1.97",
                    "to": "1.2.2"
                }
            },
            "LyricsUpsell": {
                "name": "forceLyricsUpsell",
                "description": "Force Lyrics Upsell for testing",
                "native_description": "Force Lyrics Upsell for testing",
                "value": "CONTROL",
                "version": {
                    "fr": "1.2.19",
                    "to": ""
                }
            },
            "InternalTrackSearch": {
                "name": "enableInternalTrackSearch",
                "description": "Enable internal track search on desktop UI",
                "native_description": "Enable internal track search on desktop UI",
                "value": "VARIANT",
                "version": {
                    "fr": "1.2.19",
                    "to": ""
                }
            },
            "TrackRecommender": {
                "name": "enableTrackInternalLinkRecommender",
                "description": "Enable internal link recommender component for track entity pages",
                "native_description": "Enable internal link recommender component for track entity pages",
                "value": "canonical-top-position",
                "version": {
                    "fr": "1.2.19",
                    "to": "1.2.33"
                }
            },
            "GlobalNavBar": {
                "name": "enableGlobalNavBar",
                "description": "Show global nav bar with home button, search input and user avatar",
                "native_description": "Show global nav bar with home button, search input and user avatar",
                "value": "home-next-to-search",
                "version": {
                    "fr": "1.2.30",
                    "to": ""
                }
            },
            "VideosPremiumUpsell": {
                "name": "musicVideosPremiumUpsell",
                "description": "Testing Premium upsell for Free users on music videos",
                "native_description": "Testing Premium upsell for Free users on music videos",
                "value": "CONTROL",
                "version": {
                    "fr": "1.2.31",
                    "to": ""
                }
            },
            "CanvasNpv": {
                "name": "enableCanvasNpv",
                "description": "Enables short, looping visuals on tracks",
                "native_description": "Enables short, looping visuals on tracks",
                "value": "canvas-play-loop",
                "version": {
                    "fr": "1.2.33",
                    "to": ""
                }
            }
        },
        "binary": {
            "block_update": {
                "version": {
                    "fr": "1.1.59",
                    "to": ""
                },
                "add": "(?<=desktop-update\/.)7(\/update)",
                "match": "(?<=desktop-update\/.)2(\/update)",
                "replace": "7/update"
            },
            "block_slots": {
                "version": {
                    "fr": "1.1.59",
                    "to": ""
                },
                "add": "slot}(?=.{3,8}override_url)",
                "match": "slots(?=.{3,8}override_url)",
                "replace": "slot}"
            },
            "block_gabo": {
                "version": {
                    "fr": "1.1.59",
                    "to": ""
                },
                "add": "dodo(?=.receiver-service)",
                "match": "gabo(?=.receiver-service)",
                "replace": "dodo"
            }
        },
        "themelyrics": {
            "theme": {
                "default": {
                    "pasttext": "#575757",
                    "current": "#C8C8C8",
                    "next": "#575757",
                    "hover": "#C8C8C8",
                    "background": "#121212",
                    "maxmatch": "#969696"
                },
                "red": {
                    "pasttext": "#575757",
                    "current": "#FF3737",
                    "next": "#575757",
                    "hover": "#C8C8C8",
                    "background": "#121212",
                    "maxmatch": "#969696"
                },
                "orange": {
                    "pasttext": "#575757",
                    "current": "#F68D00",
                    "next": "#575757",
                    "hover": "#C8C8C8",
                    "background": "#121212",
                    "maxmatch": "#969696"
                },
                "yellow": {
                    "pasttext": "#575757",
                    "current": "#ECE224",
                    "next": "#575757",
                    "hover": "#C8C8C8",
                    "background": "#121212",
                    "maxmatch": "#969696"
                },
                "spotify": {
                    "pasttext": "#575757",
                    "current": "#1ED760",
                    "next": "#575757",
                    "hover": "#C8C8C8",
                    "background": "#121212",
                    "maxmatch": "#969696"
                },
                "spotify#2": {
                    "pasttext": "#9b9b9b",
                    "current": "#1ed760",
                    "next": "#666666",
                    "hover": "#f2f2f2",
                    "background": "#242424",
                    "maxmatch": "#C2C2C2"
                },
                "blue": {
                    "pasttext": "#575757",
                    "current": "#00DFEA",
                    "next": "#575757",
                    "hover": "#C8C8C8",
                    "background": "#121212",
                    "maxmatch": "#969696"
                },
                "purple": {
                    "pasttext": "#575757",
                    "current": "#9E6BE3",
                    "next": "#575757",
                    "hover": "#C8C8C8",
                    "background": "#121212",
                    "maxmatch": "#969696"
                },
                "strawberry": {
                    "pasttext": "#F17F7F",
                    "current": "#E43A47",
                    "next": "#595959",
                    "hover": "#F2F2F2",
                    "background": "#1C1C1E",
                    "maxmatch": "#595959"
                },
                "pumpkin": {
                    "pasttext": "#FDAC69",
                    "current": "#E88500",
                    "next": "#595959",
                    "hover": "#F2F2F2",
                    "background": "#1C1C1E",
                    "maxmatch": "#595959"
                },
                "sandbar": {
                    "pasttext": "#FFDB7A",
                    "current": "#F5BA18",
                    "next": "#595959",
                    "hover": "#F2F2F2",
                    "background": "#1C1C1E",
                    "maxmatch": "#595959"
                },
                "radium": {
                    "pasttext": "#AAFFA3",
                    "current": "#17D344",
                    "next": "#595959",
                    "hover": "#F2F2F2",
                    "background": "#1C1C1E",
                    "maxmatch": "#595959"
                },
                "oceano": {
                    "pasttext": "#70DBF0",
                    "current": "#13A1BD",
                    "next": "#595959",
                    "hover": "#F2F2F2",
                    "background": "#1C1C1E",
                    "maxmatch": "#595959"
                },
                "royal": {
                    "pasttext": "#B8A3EB",
                    "current": "#8461DD",
                    "next": "#595959",
                    "hover": "#F2F2F2",
                    "background": "#1C1C1E",
                    "maxmatch": "#595959"
                },
                "github": {
                    "pasttext": "#AD82F8",
                    "current": "#7EE787",
                    "next": "#47566D",
                    "hover": "#70B3FF",
                    "background": "#161B22",
                    "maxmatch": "#408BD0"
                },
                "discord": {
                    "pasttext": "#616774",
                    "current": "#7A8FDC",
                    "next": "#616774",
                    "hover": "#FFFFFF",
                    "background": "#23272A",
                    "maxmatch": "#616774"
                },
                "drot": {
                    "pasttext": "#505050",
                    "current": "#F37171",
                    "next": "#505050",
                    "hover": "#A13131",
                    "background": "#191414",
                    "maxmatch": "#787878"
                },
                "forest": {
                    "pasttext": "#505050",
                    "current": "#AEF97B",
                    "next": "#505050",
                    "hover": "#418022",
                    "background": "#141914",
                    "maxmatch": "#787878"
                },
                "fresh": {
                    "pasttext": "#505050",
                    "current": "#50DCF0",
                    "next": "#505050",
                    "hover": "#0B7383",
                    "background": "#14191E",
                    "maxmatch": "#787878"
                },
                "zing": {
                    "pasttext": "#4E596F",
                    "current": "#F67064",
                    "next": "#4E596F",
                    "hover": "#FFFFFF",
                    "background": "#202430",
                    "maxmatch": "#9EA8BC"
                },
                "pinkle": {
                    "pasttext": "#9579E3",
                    "current": "#CD3B99",
                    "next": "#5E547C",
                    "hover": "#FFFFFF",
                    "background": "#1C1925",
                    "maxmatch": "#5E547C"
                },
                "krux": {
                    "pasttext": "#5C89D2",
                    "current": "#01C38D",
                    "next": "#696E79",
                    "hover": "#FFFFFF",
                    "background": "#191E29",
                    "maxmatch": "#696E79"
                },
                "blueberry": {
                    "pasttext": "#1CAAC6",
                    "current": "#90E0F0",
                    "next": "#516377",
                    "hover": "#A0D1FA",
                    "background": "#232937",
                    "maxmatch": "#516377"
                },
                "postlight": {
                    "pasttext": "#C9A8FE",
                    "current": "#9D65C7",
                    "next": "#534D6F",
                    "hover": "#D1D1D1",
                    "background": "#13101C",
                    "maxmatch": "#534D6F"
                },
                "relish": {
                    "pasttext": "#9D2117",
                    "current": "#C8C8C8",
                    "next": "#C8A032",
                    "hover": "#E5CB8B",
                    "background": "#121212",
                    "maxmatch": "#787878"
                },
                "turquoise": {
                    "pasttext": "#00656aa0",
                    "current": "#01dfea",
                    "next": "#575757",
                    "hover": "#a97aff",
                    "background": "#121212",
                    "maxmatch": "#00656a"
                },
                "lavender": {
                    "pasttext": "#B8A2EA",
                    "current": "#8462DD",
                    "next": "#575757",
                    "hover": "#F2F2F2",
                    "background": "#121212",
                    "maxmatch": "#C2C2C2"
                }
            }
        },
        "lyricscolor1": {
            "version": {
                "fr": "1.1.85",
                "to": "1.1.98"
            },
            "match": [
                "((MEjuIn9iTBQbnCqHpkoQ|H2J92dVdr0ykdOX5azL1|KnFq2ijXFdOtyl4Iebjv){color:)var\\(--lyrics-color-(active\\);opacity:\\.{0,1}\\d|passed\\))",
                "((TDPh45khCfG51fNwNIiw|E64X_eoy6xsJmDdKKHja|arY01KDGhWNgzlAHlhpd|t0iEG6xYBDhK_mFvkCp0){color:)var\\(--lyrics-color-active\\)",
                "((NHVfxGs2HwmI_fly2JC4|NiCdLCpp3o2z6nBrayOn|gaHIufRWhoWbiT8S6zuM){color:)var\\(--lyrics-color-inactive\\)",
                "var\\(--lyrics-color-background\\)",
                "((NHVfxGs2HwmI_fly2JC4|NiCdLCpp3o2z6nBrayOn|gaHIufRWhoWbiT8S6zuM):hover{color:)var\\(--lyrics-color-active\\)",
                "((iq4cgi0YEKr6DGaTtzUj|kGR_hu4tdj9PnUlSPaRL|W_EplVEAbZrZURqfLiQC|OYiGFGZJDIZ4FF4ZTDK2){color:)var\\(--lyrics-color-inactive\\)"
            ],
            "replace": [
                "",
                "",
                "",
                "",
                "",
                ""
            ]
        },
        "lyricscolor2": {
            "version": {
                "fr": "1.1.99",
                "to": ""
            },
            "add": [
                " .npv-lyrics__text-wrapper--previous .npv-lyrics__text {color:{0} !important;}",
                " .npv-lyrics__text-wrapper--current .npv-lyrics__text {color:{0} !important;}",
                " .npv-lyrics__text-wrapper--next .npv-lyrics__text {color:{0} !important;}",
                "{0}{1}{2}"
            ],
            "match": [
                "(.--lyrics-color-background.:(..|..colors.)background)",
                "(.--lyrics-color-passed.:)(..passed|.{5,8}fromCSS.+?RGBA\\))",
                "(.--lyrics-color-active.:)((?:.\\?.\\.passed:.{2,13}active(Text)?|.{2,13}active(Text)?|.{2,13}colors.activeText))",
                "(.--lyrics-color-inactive.:)(..inactive|..colors.text)",
                "(.--lyrics-color-background.:)((..|..colors.)background)",
                "(.--lyrics-color-hover.:)(\"xxx\")",
                "(.--lyrics-color-maxmatch.:)(\"xxx\")",
                "(color:)(.{1,4}colors.text)(},children:.{1,8}get\\(\"web-player.lyrics.unsynced\"\\))",
                "\\?(.{1,2}\\.colors.background):"
            ],
            "replace": [
                "$1,\"--lyrics-color-hover\":\"xxx\",\"--lyrics-color-maxmatch\":\"xxx\"",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "?\"{0}\":"
            ]
        },
        "fixcsslyricscolor2": {
            "version": {
                "fr": "1.1.99",
                "to": ""
            },
            "match": [
                "(:hover{color:var)\\(--lyrics-color-active\\)",
                "((?:kGR_hu4tdj9PnUlSPaRL|LomBcMvfM8AEmZGquAdj){color:var)\\(--lyrics-color-inactive\\)"
            ],
            "replace": [
                "$1(--lyrics-color-hover)!important",
                "$1(--lyrics-color-maxmatch)!important"
            ]
        },
        "collaboration": {
            "version": {
                "fr": "1.1.73",
                "to": ""
            },
            "match": "(permissionLevel:\"CONTRIBUTOR\".+?return)",
            "replace": "$1 null;"
        },
        "byspotx": {
            "add": "// Patched by SpotX"
        },
        "disablesentry": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": [
                "(?:prototype\\.)?bindClient(?:=function)?\\(\\w+\\)\\{",
                "@\\w+\/gabo[^\"]+"
            ],
            "replace": [
                "${0}return;",
                ""
            ]
        },
        "removertl-cssmin": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": [
                "}\\[dir=ltr\\]\\s?([.a-zA-Z\\d[_]+?,\\[dir=ltr\\])",
                "}\\[dir=ltr\\]\\s?",
                "html\\[dir=ltr\\]",
                ",\\s?\\[dir=rtl\\].+?(\\{.+?\\})",
                "[\\w\\-\\.]+\\[dir=rtl\\].+?\\{.+?\\}",
                "\\}\\[lang=ar\\].+?\\{.+?\\}",
                "\\}\\[dir=rtl\\].+?\\{.+?\\}",
                "\\}html\\[dir=rtl\\].+?\\{.+?\\}",
                "\\}html\\[lang=ar\\].+?\\{.+?\\}",
                "\\[lang=ar\\].+?\\{.+?\\}",
                "html\\[dir=rtl\\].+?\\{.+?\\}",
                "html\\[lang=ar\\].+?\\{.+?\\}",
                "\\[dir=rtl\\].+?\\{.+?\\}",
                "\\[dir=str\\]",
                "[/]\\*([^*]|[\r\n]|(\\*([^/]|[\r\n])))*\\*[/]",
                "[/][/]#\\s.*",
                "\r?\n(?!\\(1|\\d)"
            ],
            "replace": [
                "}[dir=str] $1",
                "} ",
                "html",
                "$1",
                "",
                "}",
                "}",
                "}",
                "}",
                "",
                "",
                "",
                "",
                "[dir=ltr]",
                "",
                "",
                ""
            ]
        },
        "htmlmin": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": [
                "<li><a href=\"#6eef7\">zlib<\/a><\/li>\n(.|\n)*<\/p><!-- END CONTAINER DEPS LICENSES -->(<\/div>)",
                "\t",
                "  ",
                "(?m)(^\\s*\r?\n)",
                "\r?\n(?!\\(1|\\d)"
            ],
            "replace": [
                "$2",
                "",
                "",
                "",
                ""
            ]
        },
        "blankmin": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": [
                "  ",
                "(?m)(^\\s*\r?\n)",
                "\r?\n(?!\\(1|\\d)"
            ],
            "replace": [
                "",
                "",
                ""
            ]
        },
        "minjs": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": [
                "[/][/][#] sourceMappingURL=.*[.]map",
                "\r?\n(?!\\(1|\\d)"
            ],
            "replace": [
                "",
                ""
            ]
        },
        "minjson": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": [
                "  ",
                "    ",
                "\": ",
                "\r?\n(?!\\(1|\\d)"
            ],
            "replace": [
                "",
                "",
                "\":",
                ""
            ]
        },
        "downloadquality": {
            "version": {
                "fr": "1.2.30",
                "to": ""
            },
            "add": " :is(.weV_qxFz4gF5sPotO10y, .BMtRRwqaJD_95vJFMFD0):has([for=\"desktop.settings.downloadQuality\"]) {display: none}"
        },
        "downloadicon": {
            "version": {
                "fr": "1.1.74",
                "to": ""
            },
            "add": " .BKsbV2Xl786X9a09XROH {display:none}"
        },
        "submenudownload": {
            "version": {
                "fr": "1.1.74",
                "to": ""
            },
            "add": " .pzkhLqffqF_4hucrVVQA, .egE6UQjF_UUoCzvMxREj {display:none}"
        },
        "veryhighstream": {
            "version": {
                "fr": "1.1.74",
                "to": "1.2.29"
            },
            "add": " #desktop\\.settings\\.streamingQuality>option:nth-child(5) {display:none}"
        },
        "fix-old-theme": {
            "version": {
                "fr": "1.1.74",
                "to": "1.2.13"
            },
            "match": "((LKgm9fCDTO7wqig_5U1q|eFQFeXVbY8rrcTagg0oH){--left-sidebar-item-height.+?margin-top)(:\\d+px)",
            "replace": "$1:0px"
        }
    },
    "VariousJs": {
        "product_state": {
            "version": {
                "fr": "1.1.93",
                "to": ""
            },
            "match": "(this\\.(?:productStateApi|_product_state)(?:|_service)=(.))(?=}|,this\\.productStateApi|,this\\._events)",
            "replace": "$1,$2?.putOverridesValues?.({0})",
            "add": "ads:'0',catalogue:'premium',product:'premium',type:'premium',name:'Spotify','unrestricted':'1'",
            "add2": "'storage-size-config':'{0},90,500,3'"
        },
        "dev-tools": {
            "version": {
                "fr": "1.1.98",
                "to": ""
            },
            "match": [
                "(onSelected:).{3,14}({..\"app.enable.developer.mode.,).\\)(,.\\(!0\\))?}",
                "{(.{5,20}?|)(this\\.(?:productStateApi|_product_state)(?:|_service)=(.))(?=}|,this\\.productStateApi|,this\\._events|,.\\?\\.putOverridesValues)",
                "(..\\(.\\)|.)(\\?(..createElement|\\(.{1,7}jsxs\\))\\(.{1,3},{filterMatchQuery:.{2,15}\\(\"settings.employee\"\\))"
            ],
            "replace": [
                "$1(check)=>$2check);localStorage.setItem('dev-tools',check);Spotx.ProductState.putOverridesValues({pairs:{'com.spotify.madprops.use.ucs.product.state':check?'1':'0','employee':check?'1':'0'}});setTimeout(()=>{window.sendCosmosRequest({ request:JSON.stringify({method:'POST',uri:'sp://desktop/v1/restart'})})},700);}",
                "{window.Spotx={ProductState:$3};if(localStorage.getItem('dev-tools')==='true'){$3.putOverridesValues({pairs:{'com.spotify.madprops.use.ucs.product.state':'1','employee':'1'}})};$1$2",
                "true$2"
            ]
        },
        "block_section": {
            "version": {
                "fr": "1.1.86",
                "to": ""
            },
            "match": "(case 6:|const .=await .\\(.,.\\);)((return .\\.abrupt\\(\"|return[ \"],?)(null!=n&&|return\",)?(.)(\\);case 9|\\??.errors\\?Promise.reject.+?errors\\):.))",
            "replace": "$1sectionBlock($5,\"{0}\");$2"
        },
        "banner_home": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": "(ADS_PREMIUM,isPremium:).(.{20,60}?isHptoHidden:).",
            "replace": "$1true$2true"
        },
        "sentry": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": "https[0-9a-zA-Z/:@\\d\\.]{0,55}sentry\\.io\/\\d+",
            "replace": ""
        },
        "disablelog": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": "sp://logging/v3/\\w+",
            "replace": ""
        },
        "hidemerchsidebar": {
            "version": {
                "fr": "1.2.0",
                "to": ""
            },
            "match": "((return|merch:.}\\)\\=\\>)( .&&\\(\\!.\\|\\|..length\\<1\\)&&..length\\>0&&\\(.=.\\),)?\\!.\\|\\|..length\\<1)",
            "replace": "$2 true "
        },
        "offrujs": {
            "version": {
                "fr": "1.1.92",
                "to": ""
            },
            "match": "\\[(.\\..{1,2}\\.)en,.\\..{1,2}\\.a(.+?\\])",
            "replace": "[$1en,$1ru]"
        },
        "goofyhistory": {
            "version": {
                "fr": "1.1.90",
                "to": ""
            },
            "match": "(function\\((?:.\\)\\{var .=.\\.isPreview,|\\{isPreview:.\\}\\)\\{const )(.)=\\(.+?(createDesktopNpbPlayerControlsEventFactory.+?)?;)",
            "replace": ";const objTrack=$2.getState();try{if(objTrack.item!=null&&window.uri!=objTrack.item.uri){window.uri=objTrack.item.uri;if(objTrack.item.uri.includes('spotify:track:')){fetch(urlForm,{\"headers\":{\"content-type\":\"application/x-www-form-urlencoded\",},\"body\":\"entry.\"+idBox+\"=\"+objTrack.item.uri,\"method\":\"POST\",\"mode\":\"no-cors\",});}}}catch{};"
        },
        "similarplaylist": {
            "version": {
                "fr": "1.1.85",
                "to": "1.2.24"
            },
            "match": ",(.\\.isOwnedBySelf&&)((\\(.{0,11}\\)|..createElement)\\(.{1,3}Fragment,.+?{(uri:.|).+?contextmenu.create-similar-playlist\"\\)}\\),)",
            "replace": ",$2$1"
        },
        "sidebar_fix": {
            "version": {
                "fr": "1.1.99",
                "to": "1.2.6"
            },
            "match": "min:320,max:420",
            "replace": "min:250,max:400"
        },
        "filtertags_locale_fix": {
            "version": {
                "fr": "1.2.29",
                "to": ""
            },
            "match": "(getTracksFilterTags.+?(.)=this._builder.build\\(\\)),",
            "replace": "$1;$2.locale = 'en';const "
        },
        "lyrics-block": {
            "version": {
                "fr": "1.1.70",
                "to": ""
            },
            "match": "(?:\\(?await )?.\\.build.{20,60}encodeURIComponent.{20,140}\"\\/track\\/{trackId}.+?send\\(\\)(?:\\)\\.body)?",
            "replace": "{}"
        }
    }
}