import { createSlice } from '@reduxjs/toolkit'
import { jsx } from 'react/jsx-runtime'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cart :localStorage.getItem('CartKey') ? JSON.parse(localStorage.getItem('CartKey')):[],
    heart : localStorage.getItem('heartkey') ? JSON.parse(localStorage.getItem('heartkey')):[],
    subtotal : localStorage.getItem('Subtotal') ? JSON.parse(localStorage.getItem('Subtotal')):0,
    filteritems : []
   
   


  },
  reducers: {
    SetReducer : (state,action) => {

           state.value = action.payload
    },

     CartReducer : (state,action) => {
      
      let axits = state.cart.find((item)=>item.id == action.payload.id)
           if (!axits) {   
             state.cart = [...state.cart,action.payload]
             localStorage.setItem('CartKey',JSON.stringify(state.cart))
           }
       
    },


    
     removeReducer : (state,action) => {
      
      state.cart = state.cart.filter((item)=>item.id !== action.payload)
            
             localStorage.setItem('CartKey',JSON.stringify(state.cart))
           
    },


         incrementReducer : (state,action) => {
      
          state.cart = state.cart.map((item)=>{

            return action.payload === item.id ? {...item , quan : item.quan + 1} : item

          })
            
             localStorage.setItem('CartKey',JSON.stringify(state.cart))
           
    },


             decrementReducer : (state,action) => {
      
                 state.cart = state.cart.map((item)=>{

                  return action.payload === item.id ? {...item , quan : item.quan > 1 ? item.quan -1 : 1}:item

                 })
            
             localStorage.setItem('CartKey',JSON.stringify(state.cart))
           
    },



    heartReducer : (state,action)=>{
             let heartaxits = state.heart.find((item)=>item.id ==  action.payload.id)
             if (!heartaxits) {
              
               state.heart = [...state.heart,action.payload]
               localStorage.setItem('heartkey', JSON.stringify(state.heart))
             }

    },


    wishremoveReducer : (state,action) => {
      
      state.heart = state.heart.filter((item)=>item.id !== action.payload)
            
             localStorage.setItem('heartkey',JSON.stringify(state.heart))
           
    },

    
    subtoalReducer : (state) => {
      
       state.subtotal = state.cart.reduce((current,updateitem) => {

         return current + (updateitem.price * updateitem.quan)

       },0)

       localStorage.setItem('Subtotal',JSON.stringify(state.subtotal))
            
            //  localStorage.setItem('subtotal',JSON.stringify(state.subtotal))
           
    },

        clearsearch : (state) => {
    
            state.filteritems = [];           
           
    },



   
   
  }
})

// Action creators are generated for each case reducer function
export const { SetReducer,CartReducer,removeReducer,heartReducer,wishremoveReducer,
  incrementReducer,decrementReducer,subtoalReducer,clearsearch} = ProductSlice.actions

export default ProductSlice.reducer