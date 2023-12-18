import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {

    private messages: Message[] = [
        {
            id: 1,
            text: 'Primeira mensagem'
        },
        {
            id:2,
            text:'Segunda Mensagem'
        },
    ];


    findAll(){
        return this.messages.filter(Boolean)
    }

    async findById(id: number){
        const message = this.messages.find((msg) => msg?.id === id);
        if (!message){
            throw Error(`Mensagem com ID ${id} não encontrada. `);
        }
        return message; 
    }

    create(messageDto: MessageDto) {
        const id = this.messages.length + 1;

        const message: Message = {
            id,
            ...messageDto,
        };
        this.messages.push(message)
        return message
    }

    async update(id: number, messageDto: MessageDto) {
        const index = this.messages.findIndex((msg)=>msg?.id === id);

        if (index>0){ //quando busca o index e não encontra ele retorna -1, por isso esse parametro.
            throw Error(`Mensagem com ID ${id} não encontrada. `);
        }

        const message: Message = {
            id,
            ...messageDto,
        };

        this.messages[index] = message;
        return message
    }

    async delete(id: number) {
        const index = this.messages.findIndex((msg)=>msg?.id === id);

        if (index>0){ //quando busca o index e não encontra ele retorna -1, por isso esse parametro.
            throw Error(`Mensagem com ID ${id} não encontrada. `);
        }
        delete this.messages[index]
        return true;
    }
}
