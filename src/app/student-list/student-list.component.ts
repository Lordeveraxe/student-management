// src/app/student-list/student-list.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((data: any) => {
      this.students = data;
    });
  }

  deleteStudent(id: string): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }
}
