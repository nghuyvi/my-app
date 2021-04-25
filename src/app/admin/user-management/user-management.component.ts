import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  @ViewChild('formDangKy') formDK!: NgForm;

  listUser: any[] = [];
  id = '';
  item: any;
  isUpdating = false;

  constructor(private accService: AccountService, private router: Router,  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this.accService.getListUser().subscribe((result: any) => {
      this.listUser = result;
    })
  }

  checkDeactivate() {
    return this.formDK.submitted;
  }

  signUp(form: any) {
    const objUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
      hoTen: form.value.hoTen,
      email: form.value.email,
      soDt: form.value.sdt,
      maLoaiNguoiDung: form.value.maLoaiNguoiDung,
      maNhom: form.value.maNhom,
    }
    this.accService.signUp(objUser).subscribe(data => {
      console.log(data);
      if(data) {
        localStorage.setItem('newUser', JSON.stringify(data));
        this.listUser.push(objUser);
        alert('Thêm người dùng thành công!')
      }
      else {
        alert('Thêm người dùng thất bại!')
      }
    })
    this.formDK.reset();
    this.getListUser();
  }


  findIndex = (id: any) =>{
    return this.listUser.findIndex((item)=>{
      return item.id === id;
    })
  }

  updateUser(form: any) {
    const objUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
      hoTen: form.value.hoTen,
      email: form.value.email,
      soDt: form.value.sdt,
      maLoaiNguoiDung: form.value.maLoaiNguoiDung,
      maNhom: form.value.maNhom,
    }
    // console.log(objUser)
    this.accService.updateUser(objUser).subscribe(data => {
      // console.log(data);
      if(data) {
        alert('Cập nhật thành công!')
        this.getListUser();
      }
    })
  }

/**check error: delete successfully but server returns error */
  delete(tk: any) {
    // console.log(tk);
    this.accService.deleteUser(tk).subscribe(response => {
      // console.log(response)
      this.listUser = [...this.listUser.splice(tk)]
      // console.log(this.listUser);
      return this.listUser;
    })
    this.getListUser();
  };

  updateForm(user:any) {
    // console.log(user)
    this.isUpdating = true;
    let matKhau = user.getAttribute('data-matKhau')
    let taiKhoan = user.getAttribute('data-taiKhoan')
    let hoTen = user.getAttribute('data-hoTen')
    let email = user.getAttribute('data-email')
    let soDt = user.getAttribute('data-sdt')
    let maNhom = user.getAttribute('data-maNhom')
    let maLoaiNguoiDung = user.getAttribute('data-maLoai')
    this.formDK.setValue({
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      hoTen: hoTen,
      email: email,
      sdt: soDt,
      maNhom: maNhom,
      maLoaiNguoiDung: maLoaiNguoiDung,
    })
  }

}
