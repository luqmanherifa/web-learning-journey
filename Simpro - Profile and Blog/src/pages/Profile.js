import { useEffect } from "react";

export default function Profile() {
  useEffect(function () {
    document.title = "Profile";
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Profile</h2>
      <p className="section-description">
        Halo, my name is Luqman. I just graduated from Computer Science Study
        Program at Sekolah Tinggi Informatika dan Komputer Indonesia Malang. I
        have an interest and hobby in computers and design. I've learned,
        practiced, and worked using some programming and design software and
        technologies such as NetBeans, Android Studio, Unity, VS Code, GitHub,
        Blender, CorelDRAW, Figma, Java, MySQL, HTML/CSS, PHP, CodeIgniter, C#,
        Vuforia AR, JavaScript, Bootstrap, and others.
      </p>
    </section>
  );
}
