import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  @ViewChild('formDangKy') formDK!: NgForm;

  listUser: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  dangKy(form: any) {
    console.log(form.value)
    const objUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
      hoTen: form.value.hoTen,
      email: form.value.email,
      sdt: form.value.sdt,
      maLoai: 'KhachHang',
    }
    this.listUser.push(objUser);
    console.log(this.listUser)
    this.formDK.reset();
  }

  update(user:any) {
    console.log(user)
    let matKhau = user.getAttribute('data-matKhau')
    let taiKhoan = user.getAttribute('data-taiKhoan')
    let hoTen = user.getAttribute('data-hoTen')
    let email = user.getAttribute('data-email')
    let sdt = user.getAttribute('data-sdt')
    let maLoai = user.getAttribute('data-maLoai')
    this.formDK.setValue({
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      hoTen: hoTen,
      email: email,
      sdt: sdt,
      maLoaiNguoiDung: maLoai,
    })
  }

  checkDeactivate() {
    return this.formDK.submitted;
  }



}
