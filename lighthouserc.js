// module.exports = {
//     ci: {
//         collect: {
//             /* Add configuration here */
//             // staticDistDir: './dist/zalo-ads-v2',
//             // startServerCommand: 'npm run serve',
//             // url: ['https://localhost:4214/client/home'],
//             url: ['https://staging-beta.ads.zalo.me/client/home/'],
//             settings: {
//                 chromeFlags: "--no-sandbox --ignore-certificate-errors",
//                 preset: 'desktop',
//                 // lhci autorun --collect.settings.extraHeaders.Lighthouse-Authorization='DSe8KGOQB3puR54c'
//                 // chromeFlags: ['--no-sandbox --ignore-certificate-errors'],
//                 // chromeFlags: '--no-sandbox --disable-gpu',
//                 // extraHeaders: JSON.stringify({ Cookie: 'XSRF-TOKEN=a994ac2abdca7d6532abf8a0f689b06f6f754fbf-1676530266354-6c0ebb6a4e0d764beee534ab; zpsid=D7Gt.138128843.240.Tw0M8Mt5C8-cQ0k7OSKmZnYsGhvU_G6zLVq4l0emp9oC9IFzRAFYOWx5C8y; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InYiOiIyIiwiaWQiOiIxMzgxMjg4NDMiLCJyb290YWdlbmN5IjoiMCIsInR5cGUiOiIwIiwibGV2ZWwiOiIwIiwicm9vdCI6IjEzODEyODg0MyIsInJvbGUiOiIxLDIsMjAwLDMwMCIsInNlc3Npb250aW1lIjoiMTY3NjUzMDI4MCIsInNpZCI6ImExMWQyNGM4LWQ5ZDQtNDU4Ny1hZTY4LWJiOTFmYjA3Mjc4MyJ9LCJuYmYiOjE2NzY1MzAyODAsImlhdCI6MTY3NjUzMDI4MH0.5vmRvHG65Hdwr3ZFKUeiS3sZqVNURMN63-f15kpeKTE; _gat=1; __zi=3000.SSZzejyD5D4eY_sbqnyCcslQ-UlT1q_7UT2tfzm42efwsxUYtK03Y7gJjAtMG0M0DpSp.1; _gat_UA-000000-0=1; IDE=AHWqTUlhHzlTxbMBCbvF_NksoLzvdIDaI0Sqm5MjmT2u18zfmTqMwEbHAs-Qe-Sd; _gid=GA1.2.1477761653.1676530264; _zlang=vn; ads_sid=lVw_PD14GrcY_RHarKLLKwB-j0AMHJO_cBhCUUCSO2sG_9XdW3mwEAtkXdg64nmWWgwfQPTKKW3akl1rdbvyIPIJoHwMNbzKWgsb4lbVINRUfza0QMG; __zi-legacy=3000.SSZzejyD5D4eY_sbqnyCcslQ-UlT1q_7UT2tfzm42efwsxUYtK03Y7gJjAtMG0M0DpSp.1; _ga=GA1.2.836805320.1655429003;' })
//                 // extraHeaders: JSON.stringify({'Lighthouse-Authorization': 'DSe8KGOQB3puR54c'})
//             },
//             numberOfRuns: 1,
//         },
//         upload: {
//             /* Add configuration here */
//             target: 'filesystem',
//             outputDir: 'reports',
//         },
//     },
// };

module.exports = {
    ci: {
        collect: {
            url: ['https://localhost:4214/client/home'],
            // url: ['https://staging-beta.ads.zalo.me/client/home/'],
            settings: {
                chromeFlags: "--no-sandbox --ignore-certificate-errors",
                preset: 'desktop',
                extraHeaders: JSON.stringify({Cookie: 'XSRF-TOKEN=a994ac2abdca7d6532abf8a0f689b06f6f754fbf-1676530266354-6c0ebb6a4e0d764beee534ab; zpsid=D7Gt.138128843.240.Tw0M8Mt5C8-cQ0k7OSKmZnYsGhvU_G6zLVq4l0emp9oC9IFzRAFYOWx5C8y; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InYiOiIyIiwiaWQiOiIxMzgxMjg4NDMiLCJyb290YWdlbmN5IjoiMCIsInR5cGUiOiIwIiwibGV2ZWwiOiIwIiwicm9vdCI6IjEzODEyODg0MyIsInJvbGUiOiIxLDIsMjAwLDMwMCIsInNlc3Npb250aW1lIjoiMTY3NjUzMDI4MCIsInNpZCI6ImExMWQyNGM4LWQ5ZDQtNDU4Ny1hZTY4LWJiOTFmYjA3Mjc4MyJ9LCJuYmYiOjE2NzY1MzAyODAsImlhdCI6MTY3NjUzMDI4MH0.5vmRvHG65Hdwr3ZFKUeiS3sZqVNURMN63-f15kpeKTE; _gat=1; __zi=3000.SSZzejyD5D4eY_sbqnyCcslQ-UlT1q_7UT2tfzm42efwsxUYtK03Y7gJjAtMG0M0DpSp.1; _gat_UA-000000-0=1; IDE=AHWqTUlhHzlTxbMBCbvF_NksoLzvdIDaI0Sqm5MjmT2u18zfmTqMwEbHAs-Qe-Sd; _gid=GA1.2.1477761653.1676530264; _zlang=vn; ads_sid=lVw_PD14GrcY_RHarKLLKwB-j0AMHJO_cBhCUUCSO2sG_9XdW3mwEAtkXdg64nmWWgwfQPTKKW3akl1rdbvyIPIJoHwMNbzKWgsb4lbVINRUfza0QMG; __zi-legacy=3000.SSZzejyD5D4eY_sbqnyCcslQ-UlT1q_7UT2tfzm42efwsxUYtK03Y7gJjAtMG0M0DpSp.1; _ga=GA1.2.836805320.1655429003;'})
            },
            numberOfRuns: 1,
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'http://localhost:9001',
            token: '31661fb4-51a4-44a6-946b-de67486ed154', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
        },
    },
};
// R0CHNzNg4FIw6J3BCakBMmhqLHolDJJkvlmN62eC