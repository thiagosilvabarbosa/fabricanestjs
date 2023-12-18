import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    private messages = [
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
    return this.messages
}

findById(id: number){
    return this.messages.find((message) => message.id === id);
}
}
