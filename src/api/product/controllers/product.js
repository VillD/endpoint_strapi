const axios = require('axios');
'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',({ strapi })=>({
    dataProduct: async(ctx, next)=>{

        const {id} = ctx.request.params;
        const user = ctx.state.user;
        const product = await strapi.entityService.findOne("api::product.product", id);
        console.log(ctx.state.user)
        return id
        
        // try{
        //     const response = await axios.get(ctx.request.params);
        //     console.log(response)
        //     return response;
        // }
        // catch(error){
        //     console.log(console.error)
        // }
        
        /*
        const response = await axios.get('/user?ID=12345');
        console.log(response);*/
    }
}));
