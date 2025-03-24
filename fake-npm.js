const colors = require('colors/safe');
const readline = require('readline');

const packages = [
    'react', 'lodash', 'axios', 'express', 'moment',
    'jquery', 'webpack', 'babel', 'typescript', 'vue',
    'angular', 'redux', 'rxjs', 'jest', 'eslint'
];

function getRandomPackage() {
    const name = packages[Math.floor(Math.random() * packages.length)];
    const version = `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`;
    return { name, version };
}


async function simulateInstall() {
    let progress = 0;
    const total = 100;
    const interval = 500; 
    
    while (true) {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(colors.green(`[${'='.repeat(progress / 2)}${' '.repeat((total - progress) / 2)}] ${progress}%`));
        
        if (Math.random() < 0.3) {
            const pkg = getRandomPackage();
            const action = ['added', 'updated', 'removed'][Math.floor(Math.random() * 3)];
            const message = `  ${action === 'added' ? '+' : action === 'updated' ? '↑' : '-'} ${pkg.name}@${pkg.version}`;
            
            if (action === 'removed') {
                console.log(colors.yellow(message));
            } else {
                console.log(colors.cyan(message));
            }
        }
        
        if (Math.random() < 0.1) {
            console.log(colors.yellow('  ⚠️  WARN deprecated package: some-package@1.2.3'));
        }
        progress = (progress + Math.random() * 10) % 100;
        await new Promise(r => setTimeout(r, interval));
    }
}
console.log(colors.bold.green('npm install v6.14.15'));
console.log(colors.gray('Installing dependencies...'));
simulateInstall();