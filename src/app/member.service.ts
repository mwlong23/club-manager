import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';

@Injectable()
export class MemberService {

  constructor() { }
  getMembers(){
    return MEMBERS;
  }

}
