import { Injectable } from '@angular/core';
import { Member } from './member.model';
// import { MEMBERS } from './mock-members';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
   }

   getMembers(){
     return this.members;
   }

   addMember(newMember: Member){
     this.members.push(newMember);
   }


  getMemberById(memberId: string){
    return this.database.object('members/' + memberId)
  }

  deleteMember(localMemberToDelete){
    let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

  updateMember(localUpdatedMember){
    let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({firstName: localUpdatedMember.firstName,
                                  lastName: localUpdatedMember.lastName,
                                  role: localUpdatedMember.role,
                                  yearsMember: localUpdatedMember.yearsMember,
                                  bio: localUpdatedMember.bio

    })
  }
};
