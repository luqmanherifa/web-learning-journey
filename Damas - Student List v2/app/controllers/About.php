<?php

class About extends Controller
{
  public function index($nama = "Luqman", $usia = 24, $profesi = "Mahasiswa")
  {
    $data['nama'] = $nama;
    $data['usia'] = $usia;
    $data['profesi'] = $profesi;
    $data['judul'] = 'About';
    $this->view('templates/header', $data);
    $this->view('about/index', $data);
    $this->view('templates/footer');
  }
  public function page()
  {
    $data['judul'] = 'Page';
    $this->view('templates/header', $data);
    $this->view('about/page');
    $this->view('templates/footer');
  }
}
