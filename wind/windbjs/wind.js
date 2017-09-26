document.addEventListener("DOMContentLoaded", start, false);

function start() {
    var permission = document.getElementById("permission");
    var progressBar = document.getElementById("progressBar");

    var canvas = document.getElementById("canvas");
    var engine = new BABYLON.Engine(canvas, true);

    BABYLON.SceneLoader.Load("", "wind.babylon", engine, function (scene) {
        scene.executeWhenReady(function () {
            var camera = scene.cameras[0];
            //camera.attachControl(canvas);
            var lights = scene.lights;
            var ground = scene.getMeshByName("ground");
            var house = scene.getMeshByName("house");
            var spinner = scene.getMeshByName("spinner");
            var spinRate = 0;

            /*var shadowList = [
                scene.getMeshByName("blades"), scene.getMeshByName("turbine"), scene.getMeshByName("vane"),
                scene.getMeshByName("vane2"), scene.getMeshByName("legs"), scene.getMeshByName("spokes"),
                scene.getMeshByName("windmill-top"), scene.getMeshByName("StraightStair001"), house, spinner
            ]
            var shadowGenerator = new BABYLON.ShadowGenerator(2048, lights[0]);
            shadowGenerator.getShadowMap().renderList = shadowList;
            ground.receiveShadows = true;*/

            var background = new BABYLON.Layer("background", null, scene, true);
            background.texture = new BABYLON.DynamicTexture("dynamicTexture", 512, scene, true);
            var textureContext = background.texture.getContext();
            var size = background.texture.getSize();
            textureContext.clearRect(0, 0, size.width, size.height);
            var gradient = textureContext.createLinearGradient(0, 0, 0, 512);
            var blueSkyRGB = [[143, 200, 219], [181, 219, 232], [216, 236, 242], [255, 255, 255]];
            //[[57, 106, 144],[105, 156, 194], [247, 253, 256]]
            //var blueSkyRGB = [[102, 108, 112], [122, 133, 140], [146, 149, 150], [211, 226, 235]];
            gradient.addColorStop(0, "rgb(" + blueSkyRGB[0] + ")");
            gradient.addColorStop(0.3, "rgb(" + blueSkyRGB[1] + ")");
            gradient.addColorStop(0.6, "rgb(" + blueSkyRGB[2] + ")");
            gradient.addColorStop(0.8, "rgb(" + blueSkyRGB[3] + ")");
            textureContext.fillStyle = gradient;
            textureContext.fillRect(0, 0, 512, 512);
            background.texture.update();

            function darkenSky() {
                if (arguments[0] > 20000) { arguments[0] = 20000 }
                var multiplyer = (arguments[0] - 10000) / 10000;

                textureContext.clearRect(0, 0, size.width, size.height);
                var gradient = textureContext.createLinearGradient(0, 0, 0, 512);
                //var greySkyRGB = [[102, 108, 112], [122, 133, 140], [146, 149, 150], [211, 226, 235]];
                var greySkyRGB =
                    [[parseInt(143 - (41 * multiplyer), 10), parseInt(200 - (92 * multiplyer), 10), parseInt(219 - (102 * multiplyer), 10)],
                    [parseInt(181 - (59 * multiplyer), 10), parseInt(219 - (86 * multiplyer), 10), parseInt(232 - (92 * multiplyer), 10)],
                    [parseInt(216 - (73 * multiplyer), 10), parseInt(236 - (87 * multiplyer), 10), parseInt(242 - (92 * multiplyer), 10)],
                    [parseInt(255 - (44 * multiplyer), 10), parseInt(255 - (29 * multiplyer), 10), parseInt(255 - (20 * multiplyer), 10)]]
                gradient.addColorStop(0, "rgb(" + greySkyRGB[0] + ")");
                gradient.addColorStop(0.3, "rgb(" + greySkyRGB[1] + ")");
                gradient.addColorStop(0.6, "rgb(" + greySkyRGB[2] + ")");
                gradient.addColorStop(0.8, "rgb(" + greySkyRGB[3] + ")");
                textureContext.fillStyle = gradient;
                textureContext.fillRect(0, 0, 512, 512);
                background.texture.update();

                var intensities = [1.0 - (.2 * multiplyer), 1.0, 0.7 - (.2 * multiplyer)]
                for (var i = 0; i < lights.length; i++) {
                    lights[i].intensity = intensities[i];
                }
            }


            /*scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
            scene.fogDensity = 0.001;
            scene.fogStart = 1000.0;
            scene.fogEnd = 1200.0;
            scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);*/


            var emitter = new BABYLON.Mesh.CreateBox("emitter", 500, scene);
            emitter.position.y = 400
            var ps = new BABYLON.ParticleSystem("paticles", 100000, scene);
            ps.particleTexture = new BABYLON.Texture("rain.png", scene);
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


            function spinWindmill() {
                if (arguments[0] > 100 && arguments[0] < 15000) {
                    spinRate = 1
                } else if (arguments[0] > 15000 && arguments[0] < 30000) {
                    spinRate = 2
                } else if (arguments[0] > 30000) {
                    spinRate = 3
                } else {
                    spinRate = 0;
                }
            }


            engine.runRenderLoop(function () {
                scene.render();
                audioData.total += audioData.now - 100;
                if (audioData.total < 0) { audioData.total = 0 }
                if (audioData.total > 40000) { audioData.total = 40000 }
                if (audioData.total > 10000) { darkenSky(audioData.total) }
                if (audioData.total > 7000) { rain(audioData.total) }
                spinner.rotate(BABYLON.Axis.Y, spinRate, BABYLON.Space.LOCAL);
                spinWindmill(audioData.total);
                progressBar.style.width = parseInt((audioData.total / 40000) * 100, 10) + "%";
            });

            window.addEventListener("resize", function () {
                engine.resize();
            });
        });
    });
}