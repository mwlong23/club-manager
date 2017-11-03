import { Component, Input, OnInit } from '@angular/core';

import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingAlbum(albumToDelete){
    if(confirm("Are you sure you want to delete this member from the chess club list?")){
      this.memberService.deleteMember(albumToDelete);
    }
  }

}
