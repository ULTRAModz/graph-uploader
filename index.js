// Don't copy my flow oo 😉

const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

module.exports.GraphOrg = async (filePath) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check if file exists
            if (!fs.existsSync(filePath)) {
                throw new Error("File not found: " + filePath);
            }

            // Check file size
            const stats = fs.statSync(filePath);
            const fileSizeInBytes = stats.size;
            const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes > 10) {
                throw new Error("File size exceeds maximum limit (10MB)");
            }

            const form = new FormData();
            const fileStream = fs.createReadStream(filePath);
            const fileType = getFileType(filePath);

            form.append("file", fileStream, {
                filename: filePath,
                contentType: fileType
            });

            const response = await axios.post("https://graph.org/upload", form, {
                headers: form.getHeaders()
            });

            if (!Array.isArray(response.data) || response.data.length === 0 || !response.data[0].src) {
                throw new Error("Invalid response data from server: " + JSON.stringify(response.data));
            }

            const graphUrl = "https://graph.org" + response.data[0].src;
            resolve(graphUrl);
        } catch (error) {
            reject(new Error("Upload failed: " + error.message));
        }
    });
}

// Sorry 😉

function _0x5181(_0x5e7dab,_0x4154e0){const _0x546e76=_0x546e();return _0x5181=function(_0x51813a,_0x7e71be){_0x51813a=_0x51813a-0x118;let _0x7e8c5d=_0x546e76[_0x51813a];return _0x7e8c5d;},_0x5181(_0x5e7dab,_0x4154e0);}function _0x546e(){const _0x43807e=['2tTOnCN','Unsupported\x20file\x20type:\x20','28llVBsj','png','557458HsDeXS','jpg','270931UMYOLM','64422lSZeMq','516680jtxEpp','2380850fEvtSC','6774sDpLHT','mp4','18bomYeF','jpeg','1015hdYpTc','toLowerCase','mov','1360205rzKrgj','split'];_0x546e=function(){return _0x43807e;};return _0x546e();}(function(_0x28d407,_0x5eb37a){const _0x400cc8=_0x5181,_0x4ef774=_0x28d407();while(!![]){try{const _0x2bbb6d=parseInt(_0x400cc8(0x12a))/0x1*(-parseInt(_0x400cc8(0x124))/0x2)+parseInt(_0x400cc8(0x118))/0x3*(parseInt(_0x400cc8(0x126))/0x4)+parseInt(_0x400cc8(0x122))/0x5+-parseInt(_0x400cc8(0x11b))/0x6*(-parseInt(_0x400cc8(0x11f))/0x7)+-parseInt(_0x400cc8(0x119))/0x8*(-parseInt(_0x400cc8(0x11d))/0x9)+-parseInt(_0x400cc8(0x11a))/0xa+-parseInt(_0x400cc8(0x128))/0xb;if(_0x2bbb6d===_0x5eb37a)break;else _0x4ef774['push'](_0x4ef774['shift']());}catch(_0x325744){_0x4ef774['push'](_0x4ef774['shift']());}}}(_0x546e,0x25f94));function getFileType(_0x2789c8){const _0x3b78c3=_0x5181,_0x2bd2fc=_0x2789c8[_0x3b78c3(0x123)]('.')['pop']()[_0x3b78c3(0x120)]();if(_0x2bd2fc===_0x3b78c3(0x129)||_0x2bd2fc===_0x3b78c3(0x11e)||_0x2bd2fc===_0x3b78c3(0x127)||_0x2bd2fc==='gif')return'image/'+_0x2bd2fc;else{if(_0x2bd2fc===_0x3b78c3(0x11c)||_0x2bd2fc===_0x3b78c3(0x121)||_0x2bd2fc==='avi'||_0x2bd2fc==='mkv')return'video/'+_0x2bd2fc;else throw new Error(_0x3b78c3(0x125)+_0x2bd2fc);}}
