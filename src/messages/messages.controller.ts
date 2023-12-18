import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService){

    }



    @Get()
    findAll(){ // findAll para buscar todos os jsons cadastrados
        return this.messagesService.findAll();
    }
    

    @Get(':id') // get para pesquisar por id
    findById(@Param() params ){
        console.log(+params.id); //console.log para testar qual id está recebendo
        return this.messagesService.findById(+params.id);

    }

    @Post()  // post para criar novos usuarios
    create(@Body() message: Message){
        return this.messagesService.create(message);
    }

    @Put(":id")// edição de parametros
    update(@Param() params, @Body() message: Message){
        return this.messagesService.update(+params.id, message);
    }

    @Delete(":id")
    delete(@Param() params){
        return this.messagesService.delete(+params.id)
    }
}
