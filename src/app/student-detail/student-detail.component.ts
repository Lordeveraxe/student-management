// src/app/student-detail/student-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: any;
  id: string;

  constructor(private studentService: StudentService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    this.studentService.getStudent(this.id).subscribe((data: any) => {
      this.student = data;
    });
  }
}
