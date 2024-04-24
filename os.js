import os from 'os'

console.log(os.userInfo().username) // username
console.log(os.userInfo().shell) // /bin/zsh
console.log(os.platform()) // darwin
console.log(os.release()) // 22.6.0, (darwin version)
console.log(os.totalmem()) // 17179869184
console.log(os.freemem()) // 3355443200
console.log(os.cpus()) // returns an array of CPU information
console.log(os.networkInterfaces()) // returns an object with network interfaces
console.log(os.hostname()) // username.local
console.log(os.homedir()) // /Users/username
console.log(os.tmpdir()) // returns the system's default directory for temporary files
console.log(os.uptime()) // returns the system uptime in seconds
console.log(os.arch()) // arm64
console.log(os.machine()) // arm64
console.log(os.type()) // Darwin
console.log(os.loadavg()) // returns an array of 1, 5, and 15 minute load averages

// TIP: The load average refers to the number of processes which are either currently being executed by the CPU or are waiting for execution.
