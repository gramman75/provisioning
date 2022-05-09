import { getCurrentInstance } from 'vue'  
export default function useEmitter() {
    const internalInstance = getCurrentInstance();
    const emitter = internalInstance?.appContext.config.globalProperties.emitter;      
    return emitter; 
}  
// emitter를 event bust로 사용
// https://exchangetuts.com/vuejs-3-event-bus-1639627926790262
