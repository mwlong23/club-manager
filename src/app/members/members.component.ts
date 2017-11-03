import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member [] = [
    new Member("Steve", "Smith", "Co-Founder", 12, "As a lifetime chess player, Steve discovered his passion while creating Seattle Chess Players."),
    new Member("Vanessa", "Dawson", "Co-Founder", 12, "Vanessa discovered her joy for chess after her first victory against Steve.")
  ];

  constructor() { }

  ngOnInit() {
  }

}
