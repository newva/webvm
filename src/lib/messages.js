const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| WebVM is a virtual Linux environment running in the browser via WebAssembly |",
	"|                                                                             |",
	"| WebVM is powered by the CheerpX virtualization engine, which enables safe,  |",
	"| sandboxed client-side execution of x86 binaries, fully client-side          |",
	"|                                                                             |",
	"| CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based  |",
	"| file system, and a Linux syscall emulator                                   |",
	"|                                                                             |",
	"| [News] Our Hackathon is coming! check out the site for updates!             |",
	"|                                                                             |",
	"| " + underline + "https://cheerpx.io/hackathon" + normal + "                                                |",
	"|                                                                             |",
	"| AMA alert! Join us Monday, March 17th at 16:00 GMT on Discord for a         |",
	"| live discussion! Don't miss out!                                            |",
	"|                                                                             |",
	"| " + underline + "https://discord.leaningtech.com" + normal + "                                             |",
	"|                                                                             |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"",
	"   Welcome to WebVM. If unsure, try these examples:",
	"",
	"     python3 examples/python3/fibonacci.py ",
	"     gcc -o helloworld examples/c/helloworld.c && ./helloworld",
	"     objdump -d ./helloworld | less -M",
	"     vim examples/c/helloworld.c",
	"     curl --max-time 15 parrot.live  # requires networking",
	""
];
export const errorMessage = [
	color + "CheerpX could not start" + normal,
	"",
	"Check the DevTools console for more information",
	"",
	"CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"CheerpX internal error message is:",
	""
];
export const unexpectedErrorMessage = [
	color + "WebVM encountered an unexpected error" + normal,
	"",
	"Check the DevTools console for further information",
	"",
	"Please consider reporting a bug!",
	"",
	"CheerpX internal error message is:",
	""
];
