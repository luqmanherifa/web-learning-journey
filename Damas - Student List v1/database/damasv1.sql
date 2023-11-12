-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 28, 2023 at 02:39 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpdasar`
--

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
CREATE TABLE IF NOT EXISTS `mahasiswa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nrp` char(9) COLLATE utf8mb4_general_ci NOT NULL,
  `nama` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `jurusan` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `gambar` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id`, `nrp`, `nama`, `email`, `jurusan`, `gambar`) VALUES
(1, '171111118', 'Hanni Pham', 'hanni@gmail.com', 'Seni Musik', 'hanni.jpg'),
(2, '171111117', 'Kang Haerin', 'haerin@gmail.com', 'Seni Tari', 'haerin.jpg'),
(3, '171111026', 'Kim Minji', 'minji@gmail.com', 'Seni Rupa', 'minji.jpg'),
(4, '171111115', 'Danielle Marsh', 'danielle@gmail.com', 'Seni Tari', 'danielle.jpg'),
(5, '171111578', 'Lee Hyein', 'hyein@gmail.com', 'Seni Lukis', 'hyein.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'luqman', '$2y$10$Dn6TmV.drRk5SOwogrRvFO7QGwDFrAXvyO8VgSLSsyX/wZGHSHG9C'),
(2, 'admin', '$2y$10$/sPAdU9hQ6yceGQxchRhz.641soSsoHRzE8g0u5xMhGG56KhAEAXq');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
