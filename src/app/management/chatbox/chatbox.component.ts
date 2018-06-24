import { Component, Inject } from '@angular/core';
import { ChatExampleData } from './data/chat-example-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
// import { MessagesService } from './message/messages.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  constructor(
    public threadsService: ThreadsService,
    public usersService: UsersService) {
// ChatExampleData.init(null, threadsService, usersService);
}
}

