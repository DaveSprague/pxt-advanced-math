//% color=#4b6584 icon="\uf1ec" block="Advanced Math"
namespace Math {
    // --- LOGS & EXPONENTS ---
    //% block="logn %n"
    export function logn(n: number): number { return Math.log(n); }
    //% block="log10 %n"
    export function log10(n: number): number { return Math.log10(n); }
    //% block="exp %n"
    export function exp(n: number): number { return Math.exp(n); }

    // --- STATISTICS ---
    //% block="average of %list"
    export function mean(list: number[]): number {
        if (list.length == 0) return 0;
        let sum = 0;
        for (let val of list) { sum += val; }
        return sum / list.length;
    }

    //% block="std dev of %list"
    export function stdDev(list: number[]): number {
        if (list.length < 2) return 0;
        let m = mean(list);
        let variance = list.reduce((a, b) => a + Math.pow(b - m, 2), 0);
        return Math.sqrt(variance / list.length);
    }

    // --- ARRAY HELPERS (NumPy/APL) ---
    //% block="take %n from %list"
    export function take(n: number, list: number[]): number[] { return list.slice(0, n); }

    //% block="drop %n from %list"
    export function drop(n: number, list: number[]): number[] { return list.slice(n); }

    //% block="count to %n"
    export function iota(n: number): number[] {
        let res = [];
        for (let i = 0; i < n; i++) res.push(i);
        return res;
    }
}
