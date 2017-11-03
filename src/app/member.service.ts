import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';

@Injectable()
export class MemberService {

  constructor() { }
  getMembers(){
    return MEMBERS;
  }

  getMemberById(albumId: number){
    for (let i = 0; i <= MEMBERS.length - 1; i++){
      if (MEMBERS[i].id ===albumId){
        return MEMBERS[i];
      }
    }
  }

}
