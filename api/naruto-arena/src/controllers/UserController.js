const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async create(request, response) {
        const { body: registro } = request; 
        try
        {
            const user = await User.create(registro);
            return response.json(user);
        }
        catch(e)
        {
            return response.send(e);
        }
        
    },
    async searchAll(request, response) {
        try
        {
            const users = await User.find();
            return response.json(users);   
        }
        catch(e)
        {
            return response.send(e);
        }
    }, 
    async searchCustom(request, response) {
        const { body: registro } = request;
        try
        {
            const users = await User.find(registro);
            return response.json(users);
        }
        catch(e)
        {
            return response.send(e);
        }        
    },
    async search(request, response) {
        const { params: { id } } = request;
        try
        {
            const user = await User.findById(id);
            return response.json(user);
        }
        catch(e)
        {
            return response.send(e);
        }
    },
    async update(request, response) {
        const { body: registro, params: { id } } = request;
        try
        {

            const user = await User.findByIdAndUpdate(id, registro, { new: true });
            return response.json(user);
        }
        catch(e)
        {
            return request.send(e);
        }
    }, 
    async remove(request, response) {
        const { params: { id } } = request;
        try
        {
            await User.findByIdAndRemove(id);
            return response.send('usuario removido.');   
        }
        catch(e)
        {
            return request.send(e);
        }
    }, 
};