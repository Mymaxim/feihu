/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : feihu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-15 12:36:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `shortname` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `nav` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '../img/iphone1.jpg', 'Apple iPhone X (A1865) 256GB 深空灰色 移动联通电信4G手机 深空灰色 iPhone X 全面屏，科技全面绽放', 'iPhone X (A1865) 256GB 深空灰色', '9488.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('2', '../img/iphonex1.jpg', 'Apple iPhone X (A1865) 256GB 银色 移动联通电信4G手机 银色 iPhone X 全面屏，科技全面绽放', 'iPhone X (A1865) 256GB 银色', '9388.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('3', '../img/huaweiv9_1.jpg', '华为 荣耀 V9 6GB+64GB版 全网通4G手机 高配版 极光蓝', '耀 V9 6GB+64GB版 高配版', '2999.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('4', '../img/huaweiv9_1.jpg', '华为 荣耀 V9 6GB+128GB版 全网通4G手机 高配版 极光蓝', '耀 V9 6GB+128GB版 高配版', '3499.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('5', '../img/xiaomi5x_1.jpg', '小米（MI）5X 64GB 移动定制版 移动联通电信4G手机 全网通 双卡双待（金色） 金色 5.5”屏幕，轻薄金属机身！变焦双摄，拍人更美！', '小米（MI）5X', '1499.00', '小米', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('6', '../img/iphone8_1.jpg', 'Apple iPhone 8 (A1863) 256GB 金色 移动联通电信4G手机 金色', 'Apple iPhone 8 256GB 金色 手机', '6388.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('7', '../img/iphoneplus_1.jpg', 'Apple iPhone 8 Plus (A1864) 256GB 深空灰色 移动联通电信4G手机 深空灰色', 'iPhone 8 Plus (A1864) 256GB 深空灰色手机', '7988.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('8', '../img/iphonep_1.jpg', 'Apple iPhone 8 Plus (A1864) 256GB 金色 移动联通电信4G手机 金色', 'iPhone 8 Plus (A1864) 256GB 金色 手机', '7988.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('9', '../img/iphoneps_1.jpg', 'Apple iPhone 8 Plus (A1864) 256GB 银色 移动联通电信4G手机 银色', 'iPhone 8 Plus (A1864) 256GB 银色 手机', '7988.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('10', '../img/iphone1.jpg', 'Apple iPhone X (A1865) 128GB 深空灰色 移动联通电信4G手机 深空灰色 iPhone X 全面屏，科技全面绽放', 'iPhone X (A1865) 128GB 深空灰色', '8888.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('11', '../img/iphonex1.jpg', 'Apple iPhone X (A1865) 128GB 银色 移动联通电信4G手机 银色 iPhone X 全面屏，科技全面绽放', 'iPhone X (A1865) 128GB 银色', '8888.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('12', '../img/iphone8_1.jpg', 'Apple iPhone 8 (A1863) 128GB 金色 移动联通电信4G手机 金色', 'Apple iPhone 8 128GB 金色 手机', '5999.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('13', '../img/iphoneplus_1.jpg', 'Apple iPhone 8 Plus (A1864) 128GB 深空灰色 移动联通电信4G手机 深空灰色', 'iPhone 8 Plus (A1864) 128GB 深空灰色手机', '7388.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('14', '../img/iphonep_1.jpg', 'Apple iPhone 8 Plus (A1864) 128GB 金色 移动联通电信4G手机 金色', 'iPhone 8 Plus (A1864) 128GB 金色 手机', '7388.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('15', '../img/iphoneps_1.jpg', 'Apple iPhone 8 Plus (A1864) 128GB 银色 移动联通电信4G手机 银色', 'iPhone 8 Plus (A1864) 128GB 银色 手机', '7388.00', 'iphone', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('16', '../img/huaweiry9_1.jpg', '华为 荣耀9 6GB+64GB版 全网通4G手机 琥珀金', '华为 荣耀9 6GB+64GB版 全网通4G手机 琥珀金', '2699.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('17', '../img/huaweiry9_1.jpg', '华为 荣耀9 4GB+64GB版 全网通4G手机 琥珀金', '华为 荣耀9 4GB+64GB版 全网通4G手机 琥珀金', '2499.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('18', '../img/huawei9_1.jpg', '华为 荣耀9 6GB+128GB版 全网通4G手机 海鸥灰', '荣耀9 6GB+128GB版 全网通4G手机 海鸥灰', '2999.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('19', '../img/huawei9_1.jpg', '华为 荣耀9 6GB+648GB版 全网通4G手机 海鸥灰', '荣耀9 6GB+64GB版 全网通4G手机 海鸥灰', '2699.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('20', '../img/v9_1.jpg', '华为 荣耀 V9 6GB+64GB版 全网通4G手机 高配版 幻夜黑', '耀 V9 6GB+64GB版 高配版', '2999.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('21', '../img/v9_1.jpg', '华为 荣耀 V9 6GB+128GB版 全网通4G手机 高配版 幻夜黑', '耀 V9 6GB+128GB版 高配版', '3299.00', '华为', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('22', '../img/mix2_1.jpg', '小米MIX2 全网通6GB+128G 黑色', 'MIX2 6GB+128G 全网通', '3699.00', '小米', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('23', '../img/mix2_1.jpg', '小米MIX2 全网通6GB+64G 黑色', 'MIX2 6GB+64G 全网通', '3455.00', '小米', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('24', '../img/note3_1.jpg', '小米（MI） 小米Note3 手机 亮黑色 全网通6G+64G 亮黑色', '小米Note3 手机 亮黑色 全网通6G+64G', '2499.00', '小米', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('25', '../img/note3_1.jpg', '小米（MI） 小米Note3 手机 亮黑色 全网通6G+128G 亮黑色', '小米Note3 手机 亮黑色 全网通6G+128G', '2899.00', '小米', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('26', '../img/xiaomi5s_1.jpg', '小米 5S高配全网3GB+64G 金色', '5S高配3GB+64G 全网', '1999.00', '小米', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('27', '../img/sanxing_1.jpg', '三星（Samsung）Galaxy S8（SM-G9508）4GB+64GB 移动联通电信4G手机 全网通 双卡双待（烟晶灰）', '三星 S8 4GB+64GB 全网通（烟晶灰）', '5688.00', '三星', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('28', '../img/sanxing_1.jpg', '三星（Samsung）Galaxy S8（SM-G9508）4GB+64GB 移动联通电信4G手机 全网通 双卡双待（谜夜黑）', '三星 S8 4GB+64GB 全网通（谜夜黑）', '5688.00', '三星', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('29', '../img/sanxing_1.jpg', '三星（Samsung）Galaxy S8（SM-G9508）4GB+128GB 移动联通电信4G手机 全网通 双卡双待（谜夜黑）', '三星 S8 4GB+128GB 全网通（烟晶灰）', '5999.00', '三星', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('30', '../img/sanxing_1.jpg', '三星（Samsung）Galaxy S8（SM-G9508）4GB+128GB 移动联通电信4G手机 全网通 双卡双待（烟晶灰）', '三星 S8 4GB+128GB 全网通（谜夜黑）', '5999.00', '三星', 'phone', '手机数码');
INSERT INTO `goodslist` VALUES ('31', '../img/5DIV_1.jpg', '佳能（Canon）EOS 5D Mark IV 套机（EF 24-70mm f/4L IS USM） 单反相机 专业级 全画幅单反', '佳能 5DIV 24-70', '24888.00', '佳能', 'photo', '手机数码');
INSERT INTO `goodslist` VALUES ('32', '../img/6D24_1.jpg', '佳能 EOS 6DKIT EF-24-105F4L 单反套机 全幅与wifi兼得，性价比神机，圆你摄影大师梦', '6D24-105', '12999.00', '佳能', 'photo', '手机数码');
INSERT INTO `goodslist` VALUES ('33', '../img/M5_1.jpg', '佳能EOS M5套机(15-45mm IS STM) 15-45mm APS-C画幅微单套机，全高清视频拍摄，3.2英寸触摸屏', '佳能 M5 15-45 STM 套机', '5599.00', '佳能', 'photo', '手机数码');
INSERT INTO `goodslist` VALUES ('34', '../img/S-SEL_1.jpg', '索尼（SONY）Vario-Tessar T* FE 24-70mm F4 ZA OSS 蔡司全画幅标准变焦微单镜头 正品行货 全国联保', 'S-SEL 24-70F4', '5899.00', '索尼', 'photo', '手机数码');
INSERT INTO `goodslist` VALUES ('35', '../img/IXUS_1.jpg', '佳能（Canon）IXUS 285 HS 银色 数码相机 轻便小巧 WIFI功能', '佳能IXUS285', '1199.00', '佳能', 'photo', '手机数码');
INSERT INTO `goodslist` VALUES ('36', '../img/A7RM2_1.jpg', '索尼(SONY) ILCE-7R M2 微单相机 黑色 正品行货 全国联保', '索尼 A7RM2 单机', '15299.00', '索尼', 'photo', '手机数码');
INSERT INTO `goodslist` VALUES ('37', '../img/wuxianshu_1.jpg', '山业SANWA 400-MA069 人体工学握式垂直无线鼠标 3档速度 3种可拆卸掌托', '无线鼠标', '329.00', '山业', 'mouse', '手机数码');
INSERT INTO `goodslist` VALUES ('38', '../img/wuxianshubiao_1.jpg', '山业SANWA MA-WLS70 自定义编程无线鼠标 黑色 人体工学激光 设计绘图9键4档DPI', '无线鼠标', '329.00', '山业', 'mouse', '手机数码');
INSERT INTO `goodslist` VALUES ('39', '../img/wuxian_1.jpg', '山业SANWA 400-MA059 人体工学握式垂直无线鼠标 黑色 左右手均可 4档DPI', '无线鼠标', '499.00', '山业', 'mouse', '手机数码');
INSERT INTO `goodslist` VALUES ('40', '../img/mianmo_1.jpg', '美迪惠尔 水润保湿面膜（升级版）10片', '水润保湿面膜（升级版）10片', '89.00', '美迪惠尔', 'face', '洗护美妆');
INSERT INTO `goodslist` VALUES ('41', '../img/yanshuang_1.jpg', '肤美一号 紧致肌活眼霜 25g 紧致修护 增加弹性 淡化细纹 抗氧化', '紧致肌活眼霜', '69.00', '肤美一号', 'face', '洗护美妆');
INSERT INTO `goodslist` VALUES ('42', '../img/pianzaiguang_1.jpg', '片仔癀 灵芝臻养焕肤乳 100ml', '灵芝臻养焕肤乳 100ml', '118.00', '片仔癀', 'face', '洗护美妆');
INSERT INTO `goodslist` VALUES ('43', '../img/shaxuan_1.jpg', '沙宣 修护水养润发乳 750ml 沙宣润发乳促销装', '沙宣润发乳', '89.00', '沙宣', 'hair', '洗护美妆');
INSERT INTO `goodslist` VALUES ('44', '../img/panting_1.jpg', '潘婷 丝质顺滑洗发露700ML送80ML优惠装', '潘婷 丝质顺滑洗发露', '49.00', '潘婷', 'hair', '洗护美妆');
INSERT INTO `goodslist` VALUES ('45', '../img/haifeisi_1.jpg', '海飞丝 去屑洗发露丝质柔滑型700ml优惠装 海飞丝 去屑洗发露700ml优惠装', '海飞丝 洗发露700ml优惠装', '59.00', '海飞丝', 'hair', '洗护美妆');
INSERT INTO `goodslist` VALUES ('46', '../img/kouhong_1.jpg', '玛丽黛佳 原色印象唇膏 3.4g R-3雨林芒 真正突破高显色唇膏不够滋润的瓶颈', '原色印象唇膏', '98.00', '玛丽黛佳', 'makeup', '洗护美妆');
INSERT INTO `goodslist` VALUES ('47', '../img/meibi_1.jpg', '玛丽黛佳 塑型双效画眉笔 57g GY-2奶奶灰 眉笔+眉粉轻松打造深邃眉眼', '塑型双效画眉笔', '57.00', '玛丽黛佳', 'makeup', '洗护美妆');
INSERT INTO `goodslist` VALUES ('48', '../img/meifen_1.jpg', '玛丽黛佳 印象女主角三色眉粉 3.3g GY1奶奶灰', '印象女主角三色眉粉', '58.00', '玛丽黛佳', 'makeup', '洗护美妆');
INSERT INTO `goodslist` VALUES ('49', '../img/baixiangguo_1.jpg', '禾善恒州 广西北流特产百香果 中大果5斤装 中大果', '百香果', '49.90', '水果', 'fruits', '食品/健康');
INSERT INTO `goodslist` VALUES ('50', '../img/huolongguo_1.jpg', '红肉红心火龙果热带新鲜水果 约6-8个果约5斤装 包邮 5斤装（现摘）', '红心火龙果', '59.80', '水果', 'fruits', '食品/健康');
INSERT INTO `goodslist` VALUES ('51', '../img/dazhaxie_1.jpg', '2998型大闸蟹礼券 5对 5.0两公蟹 3.5两母蟹', '2998型大闸蟹礼券 5对', '1499.00', '生鲜', 'fruits', '食品/健康');
INSERT INTO `goodslist` VALUES ('52', '../img/dazhaxie_2.jpg', '1368型大闸蟹礼券 5对 4.0两公蟹 3.0两母蟹', '1368型大闸蟹礼券 5对', '820.00', '生鲜', 'fruits', '食品/健康');
INSERT INTO `goodslist` VALUES ('53', '../img/danbaifen_1.jpg', 'Si-Ki时健低糖营养蛋白粉1000g', '低糖营养蛋白粉1000g', '168.00', '营养保健', 'health', '食品/健康');
INSERT INTO `goodslist` VALUES ('54', '../img/gaipian_1.jpg', 'Si-Ki时健钙维D（液体钙）软胶囊（1.1g/粒x200粒）', 'Si-Ki时健钙维D（液体钙）软胶囊', '128.00', '营养保健', 'health', '食品/健康');
INSERT INTO `goodslist` VALUES ('55', '../img/huxinlihe_1.jpg', 'Si-Ki时健护心礼盒套餐（2盒角鲨烯红景天+2盒海豹紫苏油）', 'Si-Ki时健护心礼盒套餐', '388.00', '营养保健', 'health', '食品/健康');
INSERT INTO `goodslist` VALUES ('56', '../img/jianguo_1.jpg', '鲜品屋坚果礼盒年货大礼包环球臻果1010g 高端定制 汇聚全球精品 独立罐装', '鲜品屋坚果礼盒年货大礼包环球臻果1010g', '149.00', '坚果零食', 'food', '食品/健康');
INSERT INTO `goodslist` VALUES ('57', '../img/jindian_1.jpg', '沃隆金典礼坚果礼盒，送礼必备', '沃隆金典礼礼盒', '358.00', '坚果零食', 'food', '食品/健康');
INSERT INTO `goodslist` VALUES ('58', '../img/huanqiu_1.jpg', '鲜品屋环球欣果坚果礼品盒大礼包2050G 新鲜速递营养全面香气浓郁', '鲜品屋环球欣果礼盒大礼包2050G', '179.00', '坚果零食', 'food', '食品/健康');
INSERT INTO `goodslist` VALUES ('59', '../img/tujidan_1.jpg', '林下散养土鸡蛋顺丰包邮40枚装（净重约1600g) 自然觅食，天然好蛋！', '林下散养土鸡蛋', '88.00', '营养保健', 'health', '食品/健康');
INSERT INTO `goodslist` VALUES ('60', '../img/bailandi_1.jpg', '玛格诺之魂白兰地750ml 欧洲前三畅销品牌！', '白兰地750ml', '458.00', '白兰地', 'wine', '食品/健康');
INSERT INTO `goodslist` VALUES ('61', '../img/putaojiu_1.jpg', '罗兰之歌隆河谷金奖干红葡萄酒 单宁细腻，口感清新愉悦！', '隆河谷金奖干红葡萄酒', '278.00', '葡萄酒', 'wine', '食品/健康');
INSERT INTO `goodslist` VALUES ('62', '../img/ganbaiputaojiu_1.jpg', '卡索娜干白葡萄酒750ml 果香浓郁、酒体柔顺，口感丰富！', '干白葡萄酒750ml', '88.00', '干百葡萄酒', 'wine', '食品/健康');
INSERT INTO `goodslist` VALUES ('63', '../img/wuxianshu_1.jpg', '山业SANWA 400-MA069 人体工学握式垂直无线鼠标 3档速度 3种可拆卸掌托', '无线鼠标', '329.00', '山业', 'mouse', null);
INSERT INTO `goodslist` VALUES ('64', '../img/wuxianshubiao_1.jpg', '山业SANWA MA-WLS70 自定义编程无线鼠标 黑色 人体工学激光 设计绘图9键4档DPI', '无线鼠标', '329.00', '山业', 'mouse', null);
INSERT INTO `goodslist` VALUES ('65', '../img/wuxian_1.jpg', '山业SANWA 400-MA059 人体工学握式垂直无线鼠标 黑色 左右手均可 4档DPI', '无线鼠标', '499.00', '山业', 'mouse', null);

-- ----------------------------
-- Table structure for miaosha
-- ----------------------------
DROP TABLE IF EXISTS `miaosha`;
CREATE TABLE `miaosha` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `tips` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of miaosha
-- ----------------------------
INSERT INTO `miaosha` VALUES ('1', '九阳榨汁机', '299.00', '199', null, 'img/miaosha1.jpg');
INSERT INTO `miaosha` VALUES ('2', '九阳保温盒', '199.00', '159', null, 'img/miaosha2.jpg');
INSERT INTO `miaosha` VALUES ('3', '床上用品套装', '219.00', '199', null, 'img/miaosha3.jpg');
INSERT INTO `miaosha` VALUES ('4', '登山包 旅行包', '399.00', '349', null, 'img/miaosha4.jpg');
INSERT INTO `miaosha` VALUES ('5', '多功能背包', '399.00', '299', null, 'img/miaosha5.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `referre` varchar(255) DEFAULT NULL,
  `activityCode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'haha', 'e99a18c428cb38d5f260853678922e03', '123@163.com', '', '');
SET FOREIGN_KEY_CHECKS=1;
