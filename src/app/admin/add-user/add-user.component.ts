import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild('formDangKy') formDK!: NgForm;

  listUser: any[] = [];

  constructor(private accService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.accService.getListUser().subscribe((result: any) => {
      console.log(result)
      this.listUser = result
    })
  }

  checkDeactivate() {
    return this.formDK.submitted;
  }

  signUp(form: any) {
    console.log(form)
    const objUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
      hoTen: form.value.hoTen,
      email: form.value.email,
      soDt: form.value.sdt,
      maLoaiNguoiDung: form.value.maLoaiNguoiDung,
      maNhom: form.value.maNhom,
    }
    this.listUser.push(objUser);
    console.log(this.listUser)
    this.formDK.reset();

    this.accService.signUp(objUser).subscribe(data => {
      console.log(data);
      if(data) {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/admin/add-user'])
      }
      else {
        alert('Đăng ký thất bại!')
      }
    })
  }

  update(user:any) {
    console.log(user)
    let matKhau = user.getAttribute('data-matKhau')
    let taiKhoan = user.getAttribute('data-taiKhoan')
    let hoTen = user.getAttribute('data-hoTen')
    let email = user.getAttribute('data-email')
    let sdt = user.getAttribute('data-sdt')
    let maNhom = user.getAttribute('data-maNhom')
    let maLoai = user.getAttribute('data-maLoai')
    this.formDK.setValue({
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      hoTen: hoTen,
      email: email,
      sdt: sdt,
      maNhom: maNhom,
      maLoaiNguoiDung: maLoai,
    })
  }

}
