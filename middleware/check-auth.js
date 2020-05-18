export default function(context){
  console.log('[middleware], check out')
  if(process.client){
    context.store.dispatch('initAuth', null)
  
  }
}