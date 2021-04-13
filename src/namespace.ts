namespace Flowers {
    export function give(count:number){
        return count + 'flowers'
    }

    export function send(count:number){
        return count + 'send'
    }

    export async function a(n:number){
        return [1,2,3].includes(n)
    }
}