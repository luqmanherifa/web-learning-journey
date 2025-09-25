-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2024 at 04:29 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enamduatech_luqmanherifa`
--

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `alias` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `review_count` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `price` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `display_phone` varchar(255) NOT NULL,
  `distance` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`id`, `alias`, `name`, `image_url`, `url`, `review_count`, `rating`, `price`, `phone`, `display_phone`, `distance`, `created_at`, `updated_at`) VALUES
(1, 'enim-aut-doloribus', 'Facere At Suscipit Molestias', 'quisquam.png', 'http://parisian.biz/velit-dolor-minima-mollitia-vel-natus', 918, 1, '$', '+16422097775', '(697) 717-4629', 1696, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(2, 'enim-numquam', 'Nobis Et Porro Maxime', 'illum.png', 'https://robel.com/rem-assumenda-et-eum-sint-error-porro.html', 481, 1, '$$$', '+56005133101', '(495) 042-6299', 891, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(3, 'dicta-sint-eum-minus-necessitatibus-cum', 'Quibusdam', 'rerum.png', 'http://www.goodwin.com/ut-debitis-est-numquam-molestiae-exercitationem-expedita', 909, 4, '$$$', '+84983840469', '(085) 181-7154', 1835, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(4, 'sint-consequatur-doloremque-delectus-veniam', 'Pariatur Corporis Consequatur Aliquam Accusamus', 'ea.png', 'http://www.williamson.info/eius-qui-aut-alias-odio-veritatis-officia-iste', 323, 3, '$$', '+97888621763', '(476) 915-3686', 1739, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(5, 'a-laudantium-id-et', 'Porro', 'corporis.png', 'http://www.veum.com/', 795, 4, '$$', '+80449722288', '(968) 712-3720', 2921, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(6, 'nulla-nostrum-unde-facere', 'Et Dolores Numquam Ut Excepturi', 'et.png', 'http://moen.com/', 907, 1, '$', '+79065222981', '(685) 323-6303', 4444, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(7, 'dolore-delectus-nihil', 'Ratione Eum', 'dolorum.png', 'http://www.lowe.com/odit-et-repellendus-eos-quaerat-et', 429, 1, '$$$', '+46204330239', '(591) 993-0079', 4446, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(8, 'autem-repellendus-ut-error-culpa', 'Molestiae Dolorem', 'velit.png', 'http://www.veum.org/molestiae-quibusdam-ducimus-eum-velit-nulla-fuga', 756, 4, '$', '+78652481484', '(826) 967-8777', 529, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(9, 'qui-eos-quo-sunt', 'Deserunt Repudiandae', 'eius.png', 'http://goldner.com/praesentium-et-sit-odit-ipsum-modi', 256, 1, '$$$', '+71825375564', '(233) 167-2829', 2845, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(10, 'repellendus-repellendus-voluptas', 'Vel Quis', 'commodi.png', 'http://www.oconner.info/voluptatem-commodi-consequatur-tempore-occaecati-possimus-iusto-earum-temporibus', 137, 4, '$', '+34046247233', '(713) 048-3289', 595, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(11, 'omnis-qui-aut-impedit', 'Veniam Vitae', 'consequatur.png', 'http://bogisich.com/enim-quis-voluptatem-nam-iusto-sit-exercitationem', 15, 5, '$$', '+63933262670', '(801) 580-8593', 1541, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(12, 'eum-quae-eos-officia-qui-pariatur', 'Iste Fuga Qui Ipsum Ipsum Excepturi', 'eos.png', 'http://brakus.com/quisquam-eligendi-fuga-commodi-illo-est-veritatis-rerum.html', 386, 5, '$$$', '+64273777184', '(476) 198-1961', 1301, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(13, 'vero-quo-tenetur-perferendis-dignissimos', 'Veritatis Ipsa Enim', 'sed.png', 'https://oberbrunner.com/suscipit-esse-molestiae-sit-recusandae.html', 39, 2, '$$$', '+06651594354', '(425) 562-7634', 1812, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(14, 'fugit-est-optio', 'Totam Nostrum Consequuntur Voluptas Laboriosam', 'quidem.png', 'http://becker.org/molestiae-numquam-laboriosam-nulla-modi-soluta-sapiente.html', 749, 5, '$', '+89503614879', '(314) 658-4733', 2523, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(15, 'magnam-vero', 'Temporibus At Aliquid Ut Commodi Quidem', 'voluptas.png', 'http://dickens.biz/alias-voluptas-neque-hic', 710, 3, '$', '+73718843005', '(159) 894-3424', 3683, '2024-01-14 21:17:30', '2024-01-14 21:17:30'),
(16, 'aut', 'Explicabo Quisquam Omnis Incidunt Reprehenderit Velit', 'ipsa.png', 'http://mueller.com/', 560, 5, '$', '+64579078789', '(533) 748-5335', 594, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(17, 'vel-ex-quaerat-atque', 'Sed', 'perferendis.png', 'http://bayer.com/voluptas-molestias-non-quis-dolor-vel-rerum-maxime.html', 504, 1, '$', '+36501420934', '(702) 207-4821', 1367, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(18, 'ut-numquam-quo', 'Est', 'dolorem.png', 'http://rau.org/nisi-harum-sunt-ut-reprehenderit-optio-odit-omnis-modi', 219, 1, '$$$', '+64312661462', '(360) 662-6976', 2247, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(19, 'voluptatem-tempora-ea', 'Recusandae Harum', 'doloremque.png', 'http://www.wyman.com/', 968, 2, '$$', '+41327941801', '(203) 415-5007', 986, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(20, 'quidem-quia-sequi-qui', 'Qui Iure Dolor Maxime', 'dignissimos.png', 'http://www.damore.biz/voluptatum-minima-magni-rem-et-quia-asperiores', 765, 1, '$', '+32043238614', '(326) 915-4214', 3449, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(21, 'totam-nobis', 'Id Aut Blanditiis', 'consequuntur.png', 'http://www.waters.com/suscipit-cupiditate-qui-libero-aliquam', 760, 5, '$$$', '+87516082512', '(251) 210-6688', 1480, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(22, 'qui', 'Modi Iure Quae', 'aut.png', 'http://orn.info/', 942, 3, '$$$', '+82259263730', '(349) 749-4207', 987, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(23, 'omnis-sapiente-ea', 'Hic', 'sint.png', 'https://ohara.com/qui-perferendis-inventore-quia-at-perferendis.html', 206, 1, '$$', '+80746615852', '(908) 399-3726', 323, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(24, 'ipsum-sint-totam', 'Facere Vitae', 'aut.png', 'http://www.roob.com/rerum-delectus-est-quod-quia-sit-eos-odit-ratione', 694, 2, '$', '+69481756437', '(494) 533-5066', 3513, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(25, 'veniam-explicabo-modi-voluptas-harum-molestiae', 'Provident Et Officiis Sapiente', 'velit.png', 'https://www.langosh.org/quaerat-quo-recusandae-ut', 902, 5, '$$$', '+75457212521', '(841) 230-4856', 1711, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(26, 'dolores-laborum', 'Minus Praesentium Consectetur Et Voluptatem Totam', 'veritatis.png', 'http://www.beier.com/sunt-minus-quos-necessitatibus-autem-aliquid-quo', 533, 4, '$', '+33109587688', '(725) 699-4728', 4500, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(27, 'dolores-fuga-alias', 'Quisquam Cupiditate Officiis', 'labore.png', 'http://gutmann.com/ad-quas-non-eius-alias', 210, 1, '$$$', '+78280430288', '(841) 216-3913', 3013, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(28, 'nulla', 'Officia Eos', 'quidem.png', 'http://runte.com/et-ut-error-veniam-quaerat-eveniet-quia-at.html', 205, 1, '$', '+85937220475', '(677) 679-0497', 3810, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(29, 'error-cupiditate-odio', 'Autem Necessitatibus Odio', 'harum.png', 'http://kuhic.net/', 282, 2, '$$', '+55562906431', '(480) 111-7934', 1358, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(30, 'repellat-et', 'Recusandae Sequi Officia', 'repellat.png', 'http://raynor.com/iusto-quos-minima-beatae-atque-non-dolorem-ipsum-ea', 637, 4, '$$$', '+75137523983', '(378) 776-3125', 161, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(31, 'ex-sunt-repellat-eum', 'Amet', 'cum.png', 'http://www.cormier.com/neque-vel-eum-est-ratione-aut-blanditiis-odio.html', 855, 4, '$$', '+50859861556', '(341) 287-6668', 1878, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(32, 'voluptatem-veritatis-ut-repudiandae', 'Aut Ipsum Nam', 'cumque.png', 'https://cartwright.com/laudantium-inventore-nulla-natus.html', 652, 1, '$', '+60890202760', '(187) 152-9172', 1629, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(33, 'consequatur', 'Soluta Qui Dolor Cum', 'et.png', 'https://abbott.net/qui-impedit-et-hic-ratione-voluptate-dolor.html', 453, 2, '$', '+14776328596', '(934) 132-1108', 2715, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(34, 'laborum-veritatis', 'Sapiente Totam', 'delectus.png', 'https://ryan.org/cupiditate-corporis-omnis-temporibus-quo.html', 954, 5, '$$$', '+11239957659', '(379) 526-5711', 447, '2024-01-14 21:17:31', '2024-01-14 21:17:31'),
(35, 'eligendi-consequatur', 'Aperiam Omnis', 'placeat.png', 'https://gulgowski.org/aut-velit-delectus-eos-consequuntur.html', 318, 5, '$$$', '+23348341926', '(815) 826-8715', 4266, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(36, 'qui-aut', 'Aperiam', 'aut.png', 'http://www.hamill.org/quidem-ex-eius-repellendus-nihil-alias-non-at.html', 31, 5, '$$', '+46200377881', '(903) 505-0564', 1910, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(37, 'corrupti-dolores-iure', 'Quod Quia', 'culpa.png', 'http://www.mueller.com/blanditiis-non-deserunt-ut-sint-exercitationem-id', 188, 1, '$$', '+25690971653', '(443) 513-4896', 3876, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(38, 'aperiam-officiis-et-quo', 'Consequatur Dolorem Qui Eum Iste', 'culpa.png', 'http://abernathy.info/aut-eum-amet-ducimus-beatae-dolorem-ab', 964, 4, '$$$', '+73613266266', '(343) 608-8724', 4861, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(39, 'magnam-modi-et-aspernatur-vel', 'Dolor Amet', 'eligendi.png', 'http://www.becker.net/', 767, 4, '$$', '+80534681499', '(583) 150-1203', 1168, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(40, 'modi-rerum', 'Quis Veniam Quasi', 'et.png', 'http://pfannerstill.info/perferendis-assumenda-deserunt-et-totam-et', 958, 1, '$$', '+75727072774', '(431) 096-6644', 349, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(41, 'corporis-saepe-praesentium', 'Aut Distinctio Eligendi', 'ab.png', 'https://www.strosin.info/tempore-consectetur-quidem-voluptatem-natus-illo-est-quia', 341, 5, '$$', '+22090112590', '(129) 362-0355', 4277, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(42, 'corporis-quaerat', 'Non Recusandae Rerum Architecto', 'animi.png', 'http://zboncak.net/nobis-ut-tenetur-quibusdam-hic-aut-fugit-tempora', 808, 1, '$', '+81580835320', '(704) 509-5106', 4008, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(43, 'debitis-et-deleniti', 'Voluptatem Ex Odit Minus', 'quo.png', 'http://schmitt.com/alias-quisquam-et-et-et-dolores-temporibus-voluptas-omnis', 944, 3, '$', '+62602525416', '(245) 047-8691', 1284, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(44, 'totam-non', 'Et', 'eum.png', 'http://farrell.info/', 28, 5, '$$$', '+15523014016', '(487) 828-5208', 1976, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(45, 'ut-inventore-dolorem', 'Tenetur Soluta Perspiciatis Aut Ipsam', 'pariatur.png', 'http://www.lehner.info/', 180, 3, '$$', '+45697093576', '(459) 019-7954', 3842, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(46, 'adipisci', 'Omnis Laboriosam Omnis', 'nulla.png', 'http://www.hegmann.com/quo-quae-qui-et-dolor-quo-omnis', 873, 1, '$$', '+86008579154', '(209) 273-0175', 3122, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(47, 'qui-sed-nostrum', 'Maxime Alias Dolorem', 'rem.png', 'https://kozey.com/blanditiis-est-aut-sit-ea-in.html', 233, 1, '$', '+09517292014', '(416) 014-9151', 3297, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(48, 'totam-earum-modi-dolore-ad', 'Odio Quidem Sed Deleniti', 'atque.png', 'http://boyer.com/inventore-assumenda-exercitationem-aut-eaque-illum-sint', 5, 5, '$$$', '+67469259689', '(102) 400-0476', 3727, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(49, 'odit-in-quis', 'Recusandae Ducimus', 'qui.png', 'http://feeney.biz/id-similique-quidem-autem-odio-quam-et-hic-sequi', 884, 3, '$', '+92287474270', '(217) 037-8122', 4852, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(50, 'minima-aut-alias-eius-vitae', 'Vel Incidunt', 'dolore.png', 'http://carroll.com/asperiores-asperiores-dolores-impedit-beatae-labore', 434, 2, '$$', '+14513516253', '(276) 495-6532', 4773, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(51, 'magnam-distinctio-fugiat-sunt-nesciunt-voluptatem', 'Aut Dolorum', 'provident.png', 'http://www.fahey.com/', 19, 1, '$$', '+18243595538', '(669) 516-2992', 1358, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(52, 'non-quidem-cumque-consequatur', 'Vitae Unde Numquam', 'minus.png', 'http://pouros.org/dolores-rem-commodi-enim.html', 416, 1, '$', '+93731708581', '(690) 690-4699', 2504, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(53, 'ipsum', 'Molestiae Consequuntur Error', 'sunt.png', 'http://zemlak.com/', 971, 4, '$$', '+09479851616', '(531) 855-2956', 2578, '2024-01-14 21:17:32', '2024-01-14 21:17:32'),
(54, 'saepe-aspernatur', 'Rem Fugit', 'velit.png', 'https://www.haley.org/sint-atque-similique-minus-modi-est-asperiores', 546, 5, '$$$', '+53700606116', '(916) 186-0203', 3082, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(55, 'deleniti-quidem', 'Laudantium Ea', 'architecto.png', 'http://www.klein.net/ipsum-sunt-eos-commodi-quod', 18, 1, '$$', '+56702094205', '(998) 803-2596', 124, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(56, 'repellendus-voluptates-autem-dolor', 'Earum Quaerat', 'deserunt.png', 'http://www.douglas.org/similique-maxime-ad-autem-ipsum-tempora-et', 86, 2, '$$', '+02894472959', '(423) 533-2401', 618, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(57, 'minima-unde', 'Iusto Qui', 'vero.png', 'http://www.kub.com/aut-laboriosam-voluptate-et-repudiandae-sint', 363, 2, '$$', '+73567806773', '(033) 876-4049', 344, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(58, 'doloribus-quam', 'Saepe Dolor Minima Dignissimos Deserunt Amet', 'sit.png', 'https://hegmann.net/amet-consequatur-totam-beatae-voluptates-earum-inventore-incidunt.html', 173, 3, '$', '+09570283467', '(063) 329-4097', 4446, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(59, 'dolor-amet-et-recusandae', 'Velit Consequatur Necessitatibus', 'molestiae.png', 'http://www.krajcik.org/quas-ea-quia-ipsum-eaque-hic-voluptas', 367, 5, '$$$', '+91239744545', '(159) 839-2016', 2252, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(60, 'odio-omnis-esse-ab-est-dolor', 'Iste Consequatur Ducimus', 'consequuntur.png', 'https://www.hansen.com/sit-perferendis-facere-nesciunt-quia-repudiandae-voluptas-tempore-iure', 117, 3, '$$', '+55395949957', '(262) 326-3424', 1015, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(61, 'rem-nesciunt-est-quae-harum', 'Enim Sit', 'non.png', 'http://gerlach.com/rerum-aliquam-tempore-neque-eius-nostrum-et', 775, 3, '$$$', '+82765630396', '(292) 887-0145', 4904, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(62, 'aperiam', 'Autem Velit Illum Autem Nisi', 'consequatur.png', 'https://www.lebsack.com/doloribus-distinctio-maiores-quia-vitae-pariatur', 425, 4, '$$$', '+07957857072', '(734) 058-7627', 4703, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(63, 'hic-dolorem-et-quia', 'Dolorem', 'provident.png', 'https://www.wehner.com/adipisci-molestiae-ut-sunt-velit-iure-rerum-aut', 579, 1, '$', '+52327050576', '(878) 284-8855', 1961, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(64, 'veritatis-numquam', 'Dolores Eum Aut', 'deleniti.png', 'http://eichmann.com/', 28, 1, '$$$', '+22843819695', '(334) 606-6939', 4064, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(65, 'labore', 'Eius Provident Adipisci', 'quam.png', 'http://walsh.com/optio-eum-modi-nihil-est-rerum-qui', 832, 5, '$', '+11830771653', '(756) 534-1584', 4425, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(66, 'ut-molestiae-aut-corrupti-ex-maiores', 'Mollitia Consectetur', 'voluptatem.png', 'http://eichmann.org/', 892, 4, '$', '+64749220829', '(658) 363-2569', 4471, '2024-01-14 21:17:33', '2024-01-14 21:17:33'),
(67, 'ut-et-voluptatem-error-corrupti', 'Quia Officiis Eligendi Ut Consequatur', 'sapiente.png', 'https://www.lueilwitz.com/nemo-tenetur-architecto-velit-nobis-sit-neque-sed', 39, 5, '$$', '+31051432588', '(625) 566-8984', 869, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(68, 'praesentium-in-recusandae-amet', 'Totam Error Qui', 'dolores.png', 'http://legros.com/in-cumque-repellendus-possimus-in-eum.html', 427, 1, '$', '+54470664514', '(406) 030-3928', 2344, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(69, 'qui-odio-inventore-perferendis', 'Harum Magnam', 'dolor.png', 'http://walsh.com/perspiciatis-maxime-ex-accusantium-consequatur', 856, 3, '$$$', '+87839794915', '(312) 144-7753', 3175, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(70, 'dicta-minus-inventore', 'Id Officia Officia Voluptate Molestias', 'rerum.png', 'http://www.kuvalis.net/molestiae-id-impedit-expedita', 917, 5, '$', '+67121625319', '(824) 306-4375', 321, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(71, 'quo-in-expedita-exercitationem-aut-non', 'Iusto', 'alias.png', 'http://osinski.org/dolorem-ipsam-voluptatem-aut-beatae-tenetur', 652, 1, '$', '+12192930003', '(931) 416-4788', 2495, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(72, 'est-rerum-consequatur', 'Vel Ab Animi Eum Eius Officia', 'consequatur.png', 'http://www.swaniawski.com/aspernatur-ipsa-dolor-tempora-labore-rerum-quo-cumque-maiores', 134, 2, '$', '+48097586844', '(848) 336-5893', 4190, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(73, 'vel-totam-sapiente-laudantium-reprehenderit', 'Est Ipsa Qui Quis', 'maiores.png', 'http://cole.org/enim-ipsa-qui-vero-eius-nostrum', 559, 2, '$$', '+80460844379', '(928) 567-7380', 3844, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(74, 'laboriosam-aspernatur-vero', 'Est Ipsum', 'doloribus.png', 'http://www.kuhic.com/', 300, 1, '$$$', '+70776618615', '(006) 235-1083', 3624, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(75, 'debitis-magnam-omnis-explicabo', 'Vitae Ducimus Iure', 'ut.png', 'http://moore.com/', 741, 4, '$$$', '+37572683578', '(075) 204-0617', 2195, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(76, 'molestias-rerum-deserunt', 'Voluptatum', 'temporibus.png', 'http://harvey.com/impedit-fuga-commodi-et-illum-fugiat-rerum.html', 111, 4, '$$', '+63459126474', '(080) 125-7744', 4716, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(77, 'dolor-similique', 'Ipsam Impedit Sed Ullam Nulla', 'praesentium.png', 'https://cormier.com/in-nobis-et-molestiae-ut-et-facere-id.html', 200, 2, '$$$', '+73840586071', '(066) 438-6947', 2028, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(78, 'et-at-aut-cupiditate', 'Officia Consectetur Odio Laudantium', 'eius.png', 'http://www.harvey.biz/', 695, 4, '$$', '+14304868322', '(108) 735-9867', 1118, '2024-01-14 21:17:34', '2024-01-14 21:17:34'),
(79, 'sed', 'Quibusdam Ducimus', 'iure.png', 'http://rice.biz/', 183, 5, '$', '+14210770225', '(617) 895-0975', 2684, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(80, 'debitis-sequi-deserunt-tempore-harum', 'Veniam Omnis Illo Aperiam Incidunt', 'fuga.png', 'http://okon.com/est-repudiandae-doloribus-ut-quis-laudantium-nobis-maxime.html', 703, 1, '$$', '+13206535665', '(281) 187-7012', 2090, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(81, 'qui-blanditiis-aspernatur', 'Ratione', 'et.png', 'http://champlin.com/aliquam-totam-nulla-eum-magni-veniam-aspernatur-odit', 136, 5, '$$', '+76557905954', '(144) 717-5195', 169, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(82, 'eius-est-reprehenderit-non-et', 'Nulla Et Beatae', 'voluptas.png', 'https://www.legros.com/eaque-sunt-illo-et-ut-sed', 641, 5, '$', '+80129280059', '(991) 754-5562', 4978, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(83, 'quo-at-sequi-cupiditate', 'Quas Quis Et', 'earum.png', 'http://www.huels.com/', 7, 4, '$$', '+43677949164', '(767) 324-2030', 4913, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(84, 'unde-atque', 'Vel', 'repudiandae.png', 'http://lockman.com/similique-dolores-ullam-rerum-et-voluptas', 575, 1, '$$$', '+64400580766', '(887) 055-2738', 1327, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(85, 'sit-sit-consequatur', 'Nesciunt', 'vitae.png', 'https://roob.org/repudiandae-qui-consequatur-vel-modi-porro-architecto.html', 60, 1, '$$$', '+93697322112', '(291) 842-3295', 4222, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(86, 'earum', 'Labore', 'harum.png', 'http://www.rogahn.info/', 683, 2, '$', '+19400261952', '(861) 674-8275', 2513, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(87, 'dignissimos', 'Cumque Ea Qui Voluptatem Fugiat', 'voluptatum.png', 'https://www.miller.com/aut-minima-tempora-ex-est-distinctio-eum', 962, 1, '$$', '+72892576831', '(970) 710-7488', 3490, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(88, 'totam-earum', 'Perspiciatis Optio Dolores Eos', 'id.png', 'http://www.lubowitz.com/magnam-dolorem-eaque-eaque-placeat-explicabo-cum', 213, 5, '$', '+60874789180', '(013) 254-7669', 3166, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(89, 'distinctio', 'Laborum Dolor Sunt Excepturi Deserunt', 'explicabo.png', 'http://mayert.info/labore-et-voluptatem-hic-accusantium', 949, 5, '$$', '+00541330659', '(340) 895-9529', 314, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(90, 'ab-architecto-consequuntur-tempore', 'Voluptatum', 'molestiae.png', 'http://larson.com/quae-exercitationem-qui-accusantium-voluptate-ut-ut.html', 919, 1, '$$$', '+35637132737', '(117) 794-3307', 1102, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(91, 'ut-molestias-inventore-enim', 'Id Voluptatibus Veniam Voluptatum Rerum', 'non.png', 'http://blanda.com/', 151, 4, '$$$', '+16607986973', '(178) 190-5655', 2780, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(92, 'est-labore-quibusdam-sint', 'Qui Repellendus Qui Vel', 'ut.png', 'http://www.hilpert.info/nihil-esse-et-dolor', 146, 1, '$', '+68255165474', '(144) 368-1221', 3788, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(93, 'aliquam-odit-enim', 'Quo Illo', 'enim.png', 'http://www.beahan.net/recusandae-tenetur-tenetur-animi-tempora-rerum-nemo', 233, 2, '$', '+37489639066', '(846) 728-6533', 2762, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(94, 'sed-quasi-magnam-error', 'Voluptatem Ea Neque Cumque', 'quia.png', 'http://schoen.com/', 233, 5, '$$$', '+04436866349', '(662) 026-1162', 1150, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(95, 'dolores-aut-consectetur', 'Alias Fuga', 'laudantium.png', 'http://homenick.com/ut-excepturi-est-exercitationem', 979, 4, '$$', '+97249006466', '(120) 062-2538', 975, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(96, 'omnis-aut', 'Ipsam Harum Enim', 'tempora.png', 'http://www.okeefe.com/assumenda-dolores-quos-at-eum-atque-tenetur-delectus', 354, 2, '$', '+42347681523', '(034) 762-5378', 1807, '2024-01-14 21:17:35', '2024-01-14 21:17:35'),
(97, 'est', 'Fugit Magni Vero', 'est.png', 'http://torp.com/blanditiis-nemo-velit-est-vero-ea', 277, 2, '$$$', '+50173317771', '(314) 680-1454', 2030, '2024-01-14 21:17:36', '2024-01-14 21:17:36'),
(98, 'quia-dicta-tenetur', 'Ullam Et Voluptatem', 'amet.png', 'http://wyman.com/exercitationem-aspernatur-temporibus-temporibus-impedit', 424, 3, '$', '+35513886804', '(695) 360-1729', 2108, '2024-01-14 21:17:36', '2024-01-14 21:17:36'),
(99, 'ratione-repellat-architecto-molestias', 'Odio Incidunt', 'eaque.png', 'http://www.daugherty.com/ut-repellendus-earum-deleniti-dolorum-commodi-corporis-repellat.html', 868, 4, '$$', '+92673801889', '(995) 969-2316', 2551, '2024-01-14 21:17:36', '2024-01-14 21:17:36'),
(100, 'minus-sit', 'Autem Et In', 'nisi.png', 'http://www.skiles.com/sit-iure-doloribus-voluptatem-delectus-omnis.html', 547, 2, '$', '+53139315121', '(765) 727-1571', 3645, '2024-01-14 21:17:36', '2024-01-14 21:17:36');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_15_040910_create_business_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `business_alias_unique` (`alias`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business`
--
ALTER TABLE `business`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
