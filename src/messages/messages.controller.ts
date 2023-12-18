import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
    findById(@Param('id',ParseIntPipe) id ){
        return this.messagesService.findById(id).catch((e)=>{
            throw new NotFoundException(e.message);
        });

    }

    @Post()  // post para criar novos usuarios
    create(@Body() messageDto: MessageDto){
        return this.messagesService.create(messageDto);
    }

    @Put(":id")// edição de parametros
    update(@Param('id',ParseIntPipe) id, @Body() messageDto: MessageDto){
        return this.messagesService.update(id, messageDto).catch((e)=>{
            throw new NotFoundException(e.message);
        });
    }

    @Delete(":id")
    delete(@Param('id',ParseIntPipe) id){
        return this.messagesService.delete(id).catch((e)=>{
            throw new NotFoundException(e.message);
        });
    }
}
