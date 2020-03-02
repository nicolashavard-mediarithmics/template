/* eslint-disable no-console */
const chalkAnimation = require("chalk-animation"),
    chalk = require("chalk"),
    spawn = require("child_process").spawn,
    packageConfig = require("../package"),
    imgName = `${packageConfig.docker.owner}/${packageConfig.docker.imageName}:${packageConfig.version}`,
    delay = delay => {
        return new Promise(resolve => {
            setTimeout(resolve, delay);
        });
    },
    build = async () => {
        return new Promise((resolve, reject) => {
            const build = spawn("docker", ["build", "-f", "Dockerfile", "-t", imgName, "--no-cache", "."]);

            build.stdout.on("data", function (data) {
                console.log(chalk.green("stdout: ") + data.toString());
            });

            build.stderr.on("data", function (data) {
                console.log(chalk.red("stderr: ") + data.toString());
            });

            build.on("exit", function (code) {
                const msg = "child process exited with code " + code.toString();
                if (code !== 0) {
                    return reject(msg);
                }
                return resolve(msg);
            });
        });
    };

build()
    .then(res => {
        const a = chalkAnimation.rainbow(res);
        return delay(1000).then(() => a.stop());
    })
    .then(() => {
        const a = chalkAnimation.karaoke(`dont forget to run > docker push ${imgName}`, 2);
        return delay(5000).then(() => a.stop());
    })
    .catch(err => {
        const a = chalkAnimation.radar(err);
        return delay(5000)
            .then(() => a.stop())
            .then(console.log(err));
    });