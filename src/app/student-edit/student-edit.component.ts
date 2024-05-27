// src/app/student-edit/student-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student = { name: '', age: null, course: '', school: '' };
  id: string;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

  updateStudent(): void {
    this.studentService.updateStudent(this.id, this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
