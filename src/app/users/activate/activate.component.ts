import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';



interface User {
  firstName: string;
  lastName: string;
  birthDate: string | null;
  registerDate: string | null;
  registerCode: string | null;
  systemCode: string;
  mediaId: string | null;
  mediaName: string | null;
  category1: string | null;
  category2: string | null;
  category3: string | null;
  category4: string | null;
  hasManagerCourse: boolean;
  hasStudentCourse: boolean;
  hasTeacherCourse: boolean;
  hasReviewerCourse: boolean;
  hasWriterCourse: boolean;
  hasSubjectCreatorCourse: boolean;
  hasSupervisorCourse: boolean;
  userId: string | null;
  subscriptionExpiryDateUTC: string | null;
  id: string;
  fullName: string;
  email: string;
  roles: string[];
  isActive: boolean;
  isLoggedIn: boolean;
  lastLogin: string | null;
  mobileNumber: string | null;
  gender: number | null;
  initialName: string;
  isVerified: boolean;
  isLTI: boolean;
  selected?: boolean;
  showMenu?: boolean;
  initials?: string;
  bgColor?: string;
  roleCount?: number;
}

@Component({
  selector: 'app-activate',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterComponent],
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css'],
})
export class ActivateComponent implements OnInit {
  users: User [] =  [
  {
    "firstName": "examinee-20",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131353",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "b7f51e76-82d5-4bba-928d-c6b87872e333",
    "fullName": "examinee-20 112",
    "email": "examinee-20@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-19",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131352",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "2f2adfd8-18ac-42f6-ac32-69f09cc6e81f",
    "fullName": "examinee-19 112",
    "email": "examinee-19@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-18",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131351",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "36cb00a1-fd05-416e-a9ee-801e8a314e97",
    "fullName": "examinee-18 112",
    "email": "examinee-18@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-17",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131350",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "716aa5c2-d282-4a6f-a4c1-4924183271e9",
    "fullName": "examinee-17 112",
    "email": "examinee-17@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-16",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131349",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "c7f73269-7f35-4a3e-8d98-2f1b1f6a779b",
    "fullName": "examinee-16 112",
    "email": "examinee-16@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-15",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131348",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "71ec7281-7661-4ce9-87a4-c93a4d81a755",
    "fullName": "examinee-15 112",
    "email": "examinee-15@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-14",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131347",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "61a8ae85-b9e6-4482-be32-a268946c1070",
    "fullName": "examinee-14 112",
    "email": "examinee-14@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-13",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131346",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "2e9ed1b9-ec94-497d-85ad-447c515163ba",
    "fullName": "examinee-13 112",
    "email": "examinee-13@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-12",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131345",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "c6024a86-a012-4cd9-b767-2b6f1e6d108e",
    "fullName": "examinee-12 112",
    "email": "examinee-12@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-11",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131344",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "cd7616cf-4057-4b5d-85c5-01105a2394b8",
    "fullName": "examinee-11 112",
    "email": "examinee-11@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-10",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131343",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "b6fc2f2f-33bc-4370-8638-7dd5f9fbf304",
    "fullName": "examinee-10 112",
    "email": "examinee-10@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": true,
    "lastLogin": "2024-08-08T14:26:56.3868333Z",
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "examinee-09",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131342",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "2e41d9a1-5ab2-484c-a06b-44fb0936c204",
    "fullName": "examinee-09 112",
    "email": "examinee-09@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-08",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131341",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "77d761a1-07c4-43e2-a41a-ffaa8aea57a9",
    "fullName": "examinee-08 112",
    "email": "examinee-08@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-07",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131340",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "2cdf01c8-f95b-47f0-8496-dcd792f1ef0a",
    "fullName": "examinee-07 112",
    "email": "examinee-07@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-06",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex1131339",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "f1168468-e925-421b-a342-d58562753027",
    "fullName": "examinee-06 112",
    "email": "examinee-06@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": "2024-08-08T14:00:40.9884014Z",
    "mobileNumber": null,
    "gender": 1,
    "initialName": "E1",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "examinee-5",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex111131338",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "96f1a1dc-cc85-4525-9205-94d3357dff4a",
    "fullName": "examinee-5 112",
    "email": "examinee-5@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": true,
    "lastLogin": "2024-08-08T12:49:25.1546716Z",
    "mobileNumber": "01001234005",
    "gender": 1,
    "initialName": "E1",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "Student1",
    "lastName": "One",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "StOn31337",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "dbbdc8b5-676d-469b-9f08-a9521e617247",
    "fullName": "Student1 One",
    "email": "a.hafez88@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "SO",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "student",
    "lastName": "one_updated",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ston31335",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": "student_1_updated",
    "subscriptionExpiryDateUTC": null,
    "id": "be2c5f1c-10cd-4aff-a639-37bb5eac2214",
    "fullName": "student one_updated",
    "email": "student1@xyz.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": null,
    "initialName": "SO",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-4",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex11111131334",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "8e684220-8083-4c6a-b59b-75e2d44b5b5e",
    "fullName": "examinee-4 112",
    "email": "examinee-4@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": true,
    "lastLogin": "2024-08-12T08:58:07.6630651Z",
    "mobileNumber": "01001234004",
    "gender": 1,
    "initialName": "E1",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "Student",
    "lastName": "Test5",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "StTe31333",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "aa25fd40-6a27-4412-a2a1-39a41a2983a5",
    "fullName": "Student Test5",
    "email": "studenttest5@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": "2024-07-16T19:33:44.3283449Z",
    "mobileNumber": "01006151985",
    "gender": 1,
    "initialName": "ST",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "Student",
    "lastName": "Test4",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "StTe31332",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "6a7ce2ba-5215-4341-aa31-ff25281b2468",
    "fullName": "Student Test4",
    "email": "studenttest4@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "ST",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "Student",
    "lastName": "Test3",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "StTe31331",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "ca14ae95-451d-4315-9f64-17594945332c",
    "fullName": "Student Test3",
    "email": "studenttest3@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "ST",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "Student",
    "lastName": "Test2",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "StTe31330",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "54e38d49-2947-4521-ba3e-6a5ad619f5ef",
    "fullName": "Student Test2",
    "email": "studenttest2@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": true,
    "lastLogin": "2024-07-18T21:13:34.4227951Z",
    "mobileNumber": null,
    "gender": 1,
    "initialName": "ST",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "Student",
    "lastName": "Account",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "StAc31329",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "05330a9c-d364-492c-b038-7b69720afc3d",
    "fullName": "Student Account",
    "email": "studenttest1@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": true,
    "lastLogin": "2024-07-17T18:36:03.4507092Z",
    "mobileNumber": null,
    "gender": null,
    "initialName": "SA",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "aliaa",
    "lastName": "ahmed",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "alah31328",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "b7482932-0604-4f75-b983-91955cf0ddf7",
    "fullName": "aliaa ahmed",
    "email": "e.aliaa.ahmed@gmail.com",
    "roles": [
      "Reviewer",
      "Supervisor",
      "Admin",
      "Manager",
      "SubjectCreator",
      "Teacher",
      "Writer"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": "2024-07-16T08:37:09.1287116Z",
    "mobileNumber": null,
    "gender": 2,
    "initialName": "AA",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "Student",
    "lastName": "Two",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "StTw31327",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "4149e7ab-c502-4ff2-bbad-b6133ea9bcd8",
    "fullName": "Student Two",
    "email": "st002@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": null,
    "gender": 1,
    "initialName": "ST",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "examinee-3",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "ex111131326",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "641573e4-b095-4de6-88d6-28c647b81655",
    "fullName": "examinee-3 112",
    "email": "examinee-3@gmail.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": true,
    "lastLogin": "2024-08-12T08:57:55.9276547Z",
    "mobileNumber": "01001234003",
    "gender": 1,
    "initialName": "E1",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "Bassant",
    "lastName": "Elsomkhraty",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "BaEl31325",
    "mediaId": null,
    "mediaName": null,
    "category1": "",
    "category2": "",
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "509d558c-c4c2-42ad-ba2c-6e4f6aed73af",
    "fullName": "Bassant Elsomkhraty",
    "email": "bassant.tarek@ejust.edu.eg",
    "roles": [
      "Reviewer",
      "Supervisor",
      "Admin",
      "Manager",
      "SubjectCreator",
      "Teacher",
      "Writer"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": null,
    "mobileNumber": "01026592077",
    "gender": 2,
    "initialName": "BE",
    "isVerified": false,
    "isLTI": false
  },
  {
    "firstName": "magdy2",
    "lastName": "magdy",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "mama31324",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "a97cc20d-7bd9-407d-afce-4beb342598b9",
    "fullName": "magdy2 magdy",
    "email": "magdy2@examinee.com",
    "roles": [
      "Student"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": "2024-07-09T09:36:37.6514563Z",
    "mobileNumber": null,
    "gender": 1,
    "initialName": "MM",
    "isVerified": true,
    "isLTI": false
  },
  {
    "firstName": "item.creator.1",
    "lastName": "112",
    "birthDate": null,
    "registerDate": null,
    "registerCode": null,
    "systemCode": "it1131323",
    "mediaId": null,
    "mediaName": null,
    "category1": null,
    "category2": null,
    "category3": null,
    "category4": null,
    "hasManagerCourse": false,
    "hasStudentCourse": false,
    "hasTeacherCourse": false,
    "hasReviewerCourse": false,
    "hasWriterCourse": false,
    "hasSubjectCreatorCourse": false,
    "hasSupervisorCourse": false,
    "userId": null,
    "subscriptionExpiryDateUTC": null,
    "id": "c9bfc831-dd8d-4939-97fd-e3ff7ebd4e08",
    "fullName": "item.creator.1 112",
    "email": "item.creator.1@gmail.com",
    "roles": [
      "Writer"
    ],
    "isActive": true,
    "isLoggedIn": false,
    "lastLogin": "2024-07-10T08:31:31.2529016Z",
    "mobileNumber": null,
    "gender": 1,
    "initialName": "I1",
    "isVerified": true,
    "isLTI": false
  }
];


  filteredUsers: User[] = [];
  totalCount = 0;
  filteredCount = 0;
  selectAllChecked = false;
  selectedUsersCount = 0;

  constructor(private router: Router) {}

  ngOnInit() {
  this.filteredUsers = this.users.map((user) => ({
    ...user,
    roleCount: user.roles.length,  // Calculate the number of roles
    initials: this.getInitials(user.fullName),
    bgColor: user.bgColor || this.getRandomColor(),
  }));
  this.totalCount = this.users.length;
  this.filteredCount = this.totalCount;
}

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  getRandomColor(): string {
    const colors = [
      "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf",
      "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  toggleMenu(user: User) {
    user.showMenu = !user.showMenu;
  }

  toggleActivation(user: User) {
    user.isActive = !user.isActive;
    console.log(user.isActive ? "Activating user:" : "Deactivating user:", user);
  }

  toggleSelectAll(event: any) {
    this.selectAllChecked = event.target.checked;
    this.filteredUsers.forEach((user) => (user.selected = this.selectAllChecked));
    this.checkSelection();
  }

  checkSelection() {
    const selectedUsers = this.filteredUsers.filter((user) => user.selected);
    this.selectedUsersCount = selectedUsers.length;
  }

 onFilterChange(filters: any): void {
  this.filteredUsers = this.users.filter((user) => {
    const matchesSearch =
      !filters.search ||
      user.fullName.toLowerCase().includes(filters.search.toLowerCase()) ||
      user.email.toLowerCase().includes(filters.search.toLowerCase());

    const matchesGender =
      !filters.gender ||
      (filters.gender === 'male' && user.gender === 1) ||
      (filters.gender === 'female' && user.gender === 2);

    const matchesRole =
      !filters.role ||
      user.roles.some(role => {

        const mappedRole = role.toLowerCase() === 'student' ? 'examinee' : role.toLowerCase();
        return mappedRole === filters.role.toLowerCase();
      });

    const matchesStatus =
      !filters.status ||
      (filters.status === 'verified' && user.isVerified) ||
      (filters.status === 'not-verified' && !user.isVerified);

    return matchesSearch && matchesGender && matchesRole && matchesStatus;
  });

  this.filteredCount = this.filteredUsers.length;
}


  viewDetails(user: User) {
    console.log("Viewing details for:", user);
    this.router.navigate(['/users/details', user.id]);
  }

  editUser(user: User) {
    console.log("Editing user:", user);
    this.router.navigate(['/users/edit', user.id]);
  }

  assignEnroll(user: User) {
    console.log("Assigning/enrolling user:", user);
  }

  deactivateSelectedUsers() {
    this.filteredUsers
      .filter(user => user.selected)
      .forEach(user => this.toggleActivation(user));
    console.log("Deactivating selected users");
  }

  assignEnrollSelectedUsers() {
    this.filteredUsers
      .filter(user => user.selected)
      .forEach(user => this.assignEnroll(user));
    console.log("Assigning/enrolling selected users");
  }
}
