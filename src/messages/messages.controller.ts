import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageDto } from './MessageDto';

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
        return this.messagesService.findById(+params.id).catch((e)=>{
            throw new NotFoundException(e.message);
        });

    }

    @Post()  // post para criar novos usuarios
    create(@Body() messageDto: MessageDto){
        return this.messagesService.create(messageDto);
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
