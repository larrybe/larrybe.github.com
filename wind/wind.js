document.addEventListener("DOMContentLoaded", start, false);

function start() {
    var progressBar = document.getElementById("progressBar");

    var canvas = document.getElementById("canvas");
    var engine = new BABYLON.Engine(canvas, true);

    BABYLON.SceneLoader.Load("", "test.babylon", engine, function (scene) {
        scene.executeWhenReady(function () {
            var camera = scene.cameras[0];
            var lights = scene.lights;

            var background = new BABYLON.Layer("background", null, scene, true);
            background.texture = new BABYLON.DynamicTexture("dynamicTexture", 512, scene, true);
            var textureContext = background.texture.getContext();
            var size = background.texture.getSize();
            textureContext.clearRect(0, 0, size.width, size.height);
            var gradient = textureContext.createLinearGradient(0, 0, 0, 512);
            var blueSkyRGB = [[57, 106, 144],
                [105, 156, 194]];
            gradient.addColorStop(0, "rgb(" + blueSkyRGB[0] + ")");
            gradient.addColorStop(0.5, "rgb(" + blueSkyRGB[1] + ")");
            textureContext.fillStyle = gradient;
            textureContext.fillRect(0, 0, 512, 512);
            background.texture.update();

            function darkenSky() {
                if (arguments[0] > 20000) { arguments[0] = 20000 }
                var multiplyer = (arguments[0] - 10000) / 10000;

                textureContext.clearRect(0, 0, size.width, size.height);
                var gradient = textureContext.createLinearGradient(0, 0, 0, 512);    
                var greySkyRGB = [[parseInt(57 + (51 * multiplyer), 10), parseInt(106 + (2 * multiplyer), 10), parseInt(144 + (-34 * multiplyer), 10)],
                    [parseInt(105 + (-26 * multiplyer), 10), parseInt(156 + (-48 * multiplyer), 10), parseInt(194 + (-84 * multiplyer), 10)]]
                gradient.addColorStop(0, "rgb(" + greySkyRGB[0] + ")");
                gradient.addColorStop(0.5, "rgb(" + greySkyRGB[1] + ")");
                textureContext.fillStyle = gradient;
                textureContext.fillRect(0, 0, 512, 512);
                background.texture.update();

                var intensities = [0.5 - (.2 * multiplyer), 0.3 - (.1 * multiplyer), 0.8, 0.5 - (.2 * multiplyer)]
                for (var i = 0; i < lights.length; i++) {
                    lights[i].intensity = intensities[i];
                }
            }


            scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
            scene.fogDensity = 0.001;
            scene.fogStart = 1000.0;
            scene.fogEnd = 1200.0;
            scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);


            var emitter = new BABYLON.Mesh.CreateBox("emitter", 500, scene);
            emitter.position.y = 400
            var ps = new BABYLON.ParticleSystem("paticles", 100000, scene);
            ps.particleTexture = new BABYLON.Texture("raindrop.png", scene);
            ps.minLifeTime = 8;
            ps.maxLifeTime = 8;
            ps.gravity = new BABYLON.Vector3(0, -250, 0);
            ps.minEmitBox = new BABYLON.Vector3(-250, -250, -250);
            ps.maxEmitBox = new BABYLON.Vector3(250, -250, 250);
            ps.minSize = .5;
            ps.maxSize = 1.2;
            function rain() {
                if (arguments[0] < 8000) { arguments[0] = 0 }
                ps.emitRate = arguments[0] / 10;
                ps.emitter = emitter;
                ps.start();
            }

            var spinner = scene.getMeshByName("spinner");

            function spinWindmill() {
                if (arguments[0] > 100 && arguments[0] < 15000) {
                    arguments[0] = 1
                } else if (arguments[0] > 15000 && arguments[0] < 30000) {
                    arguments[0] = 2
                } else if (arguments[0] > 30000) {
                    arguments[0] = 3
                }
                spinner.rotate(BABYLON.Axis.Y, arguments[0], BABYLON.Space.LOCAL);
            }


            engine.runRenderLoop(function () {
                scene.render();
                audioData.total += audioData.now - 100;
                if (audioData.total < 0) { audioData.total = 0 }
                if (audioData.total > 50000) { audioData.total = 50000 }
                if (audioData.total > 10000) { darkenSky(audioData.total) }
                if (audioData.total > 7000) { rain(audioData.total) }
                spinWindmill(audioData.total);
                progressBar.style.width = parseInt((audioData.total / 50000) * 100, 10) + "%";
            });

            window.addEventListener("resize", function () {
                engine.resize();
            });
        });
    });
}
