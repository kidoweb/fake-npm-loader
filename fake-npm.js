const colors = require('colors/safe');
const readline = require('readline');

const packages = [
    { name: 'react', dependencies: ['loose-envify', 'object-assign', 'scheduler'] },
    { name: 'lodash', dependencies: [] },
    { name: 'axios', dependencies: ['follow-redirects', 'form-data'] },
    { name: 'express', dependencies: ['accepts', 'body-parser', 'cookie', 'debug'] },
    { name: 'moment', dependencies: [] },
    { name: 'jquery', dependencies: [] },
    { name: 'webpack', dependencies: ['@webpack-cli/serve', 'acorn', 'browserslist'] },
    { name: 'babel', dependencies: ['@babel/core', '@babel/preset-env'] },
    { name: 'typescript', dependencies: [] },
    { name: 'vue', dependencies: ['@vue/compiler-dom', '@vue/runtime-dom'] }
];

const phases = [
    'Resolving dependencies',
    'Fetching packages',
    'Linking dependencies',
    'Building fresh packages',
    'Generating lockfile',
    'Auditing packages'
];

function getRandomPackage() {
    const pkg = packages[Math.floor(Math.random() * packages.length)];
    const version = `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`;
    return { ...pkg, version };
}

function formatBytes(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

async function simulateInstall() {
    let progress = 0;
    const total = 100;
    const interval = 300;
    let currentPhase = 0;
    let packagesInstalled = 0;
    let totalSize = 0;
    let errors = 0;
    let warnings = 0;
    
    console.log(colors.bold.green('npm install v6.14.15'));
    console.log(colors.gray('Installing dependencies...\n'));

    const startTime = Date.now();

    while (progress < 100) {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(colors.green(`[${'='.repeat(progress / 2)}${' '.repeat((total - progress) / 2)}] ${progress}%`));
        
        // Show current phase
        if (progress % 20 === 0) {
            console.log(colors.cyan(`\n⚡ ${phases[currentPhase]}`));
            currentPhase = (currentPhase + 1) % phases.length;
        }

        // Package operations
        if (Math.random() < 0.3) {
            const pkg = getRandomPackage();
            const size = Math.floor(Math.random() * 1024 * 1024); // Random size up to 1MB
            totalSize += size;
            packagesInstalled++;

            // Install main package
            console.log(colors.green(`  + ${pkg.name}@${pkg.version} (${formatBytes(size)})`));

            // Install dependencies
            for (const dep of pkg.dependencies) {
                const depVersion = `${Math.floor(Math.random() * 5)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`;
                const depSize = Math.floor(Math.random() * 512 * 1024); // Random size up to 512KB
                totalSize += depSize;
                console.log(colors.gray(`    └── ${dep}@${depVersion} (${formatBytes(depSize)})`));
            }
        }

        // Random warnings and errors
        if (Math.random() < 0.1) {
            warnings++;
            console.log(colors.yellow('  ⚠️  WARN deprecated package: some-package@1.2.3: Critical security issues found'));
        }

        if (Math.random() < 0.05) {
            errors++;
            console.log(colors.red('  ❌ ERR! Error: ENOENT: no such file or directory'));
        }

        progress += Math.random() * 5;
        progress = Math.min(progress, 100);
        await new Promise(r => setTimeout(r, interval));
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    // Final summary
    console.log('\n' + colors.bold.green('✨ Done!'));
    console.log(colors.white(`
📦 Packages installed: ${packagesInstalled}
📊 Total size: ${formatBytes(totalSize)}
⚡ Time taken: ${duration}s
⚠️ Warnings: ${warnings}
❌ Errors: ${errors}
    `));

    if (errors > 0) {
        console.log(colors.yellow('\nFound some errors. Run npm audit for details.'));
    }

    process.exit(0);
}

simulateInstall().catch(err => {
    console.error(colors.red('Fatal error:', err));
    process.exit(1);
});