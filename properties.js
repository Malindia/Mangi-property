const locations = [
    { town: 'Nairobi', county: 'Nairobi' },
    { town: 'Mombasa', county: 'Mombasa' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Eldoret', county: 'Uasin Gishu' },
    { town: 'Thika', county: 'Kiambu' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Garissa', county: 'Garissa' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Meru', county: 'Meru' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Machakos', county: 'Machakos' },
    { town: 'Kakamega', county: 'Kakamega' },
    { town: 'Bungoma', county: 'Bungoma' },
    { town: 'Busia', county: 'Busia' },
    { town: 'Kiambu', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Lamu', county: 'Lamu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Marsabit', county: 'Marsabit' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Isiolo', county: 'Isiolo' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Wajir', county: 'Wajir' },
    { town: 'Nyamira', county: 'Nyamira' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Siaya', county: 'Siaya' },
    { town: 'Kabarnet', county: 'Baringo' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Lodwar', county: 'Turkana' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Garbatula', county: 'Isiolo' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Bondo', county: 'Siaya' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Hola', county: 'Tana River' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Rongai', county: 'Nakuru' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Muhoroni', county: 'Kisumu' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Emali', county: 'Makueni' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Kapsowar', county: 'Elgeyo Marakwet' },
    { town: 'Kendu Bay', county: 'Homa Bay' },
    { town: 'Nkubu', county: 'Meru' },
    { town: 'Keroka', county: 'Kisii' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Awendo', county: 'Migori' },
    { town: 'Sotik', county: 'Bomet' },
    { town: 'Sagana', county: 'Kirinyaga' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Kikuyu', county: 'Kiambu' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Ol Kalou', county: 'Nyandarua' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Kangema', county: 'Murang\'a' },
    { town: 'Kinango', county: 'Kwale' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyamira', county: 'Nyamira' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Kathwana', county: 'Tharaka-Nithi' },
    { town: 'Nandi Hills', county: 'Nandi' },
    { town: 'Mweiga', county: 'Nyeri' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Sawa Sawa', county: 'Kilifi' },
    { town: 'Migori', county: 'Migori' },
    { town: 'Kiserian', county: 'Kajiado' },
    { town: 'Nyansiongo', county: 'Nyamira' },
    { town: 'Lokichoggio', county: 'Turkana' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kikuyu', county: 'Kiambu' },
    { town: 'Wajir', county: 'Wajir' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Bungoma', county: 'Bungoma' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Makueni', county: 'Makueni' },
    { town: 'Rongai', county: 'Nakuru' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Machakos', county: 'Machakos' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Wundanyi', county: 'Taita-Taveta' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Molo', county: 'Nakuru' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kangundo', county: 'Machakos' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Wundanyi', county: 'Taita-Taveta' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Molo', county: 'Nakuru' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kangundo', county: 'Machakos' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Wundanyi', county: 'Taita-Taveta' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Molo', county: 'Nakuru' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kangundo', county: 'Machakos' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Wundanyi', county: 'Taita-Taveta' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Molo', county: 'Nakuru' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kangundo', county: 'Machakos' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Wundanyi', county: 'Taita-Taveta' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Molo', county: 'Nakuru' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kangundo', county: 'Machakos' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Wundanyi', county: 'Taita-Taveta' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Molo', county: 'Nakuru' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kangundo', county: 'Machakos' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Limuru', county: 'Kiambu' },
    { town: 'Embu', county: 'Embu' },
    { town: 'Nyeri', county: 'Nyeri' },
    { town: 'Mwingi', county: 'Kitui' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Malindi', county: 'Kilifi' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nanyuki', county: 'Laikipia' },
    { town: 'Mandera', county: 'Mandera' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Taveta', county: 'Taita-Taveta' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Wundanyi', county: 'Taita-Taveta' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Molo', county: 'Nakuru' },
    { town: 'Kwale', county: 'Kwale' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Kapenguria', county: 'West Pokot' },
    { town: 'Ruiru', county: 'Kiambu' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kangundo', county: 'Machakos' },
    { town: 'Wote', county: 'Makueni' },
    { town: 'Nambale', county: 'Busia' },
    { town: 'Tala', county: 'Machakos' },
    { town: 'Matuu', county: 'Machakos' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Naivasha', county: 'Nakuru' },
    { town: 'Kisii', county: 'Kisii' },
    { town: 'Oyugis', county: 'Homa Bay' },
    { town: 'Kibwezi', county: 'Makueni' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Kitale', county: 'Trans-Nzoia' },
    { town: 'Kapsabet', county: 'Nandi' },
    { town: 'Kericho', county: 'Kericho' },
    { town: 'Kajiado', county: 'Kajiado' },
    { town: 'Nakuru', county: 'Nakuru' },
    { town: 'Karatina', county: 'Nyeri' },
    { town: 'Maragua', county: 'Murang\'a' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugulu', county: 'Bungoma' },
    { town: 'Kihancha', county: 'Nyamira' },
    { town: 'Malaba', county: 'Busia' },
    { town: 'Ogembo', county: 'Kisii' },
    { town: 'Maralal', county: 'Samburu' },
    { town: 'Kitui', county: 'Kitui' },
    { town: 'Londiani', county: 'Kericho' },
    { town: 'Narok', county: 'Narok' },
    { town: 'Bomet', county: 'Bomet' },
    { town: 'Voi', county: 'Taita-Taveta' },
    { town: 'Homa Bay', county: 'Homa Bay' },
    { town: 'Kilifi', county: 'Kilifi' },
    { town: 'Webuye', county: 'Bungoma' },
    { town: 'Litein', county: 'Kericho' },
    { town: 'Mumias', county: 'Kakamega' },
    { town: 'Kerugoya', county: 'Kirinyaga' },
    { town: 'Othaya', county: 'Nyeri' },
    { town: 'Nyahururu', county: 'Laikipia' },
    { town: 'Lugari', county: 'Kakamega' },
    { town: 'Ngong', county: 'Kajiado' },
    { town: 'Nyahururu', county: 'Laikipia' },
]
const API_URL = "https://mangi-properties-backend.onrender.com/properties";
const BASE_API_URL = "https://mangi-properties-backend.onrender.com";
// const API_URL = "http://192.168.100.15:3000/properties";
// const BASE_API_URL = "http://192.168.100.15:3000";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('location').addEventListener('input', handleLocationInput);
    document.getElementById('addPropertyBtn').addEventListener('click', () => openForm());
    document.getElementById('propertyFormInner').addEventListener('submit', submitPropertyForm);
    document.getElementById('images').addEventListener('change', handleImageChange);

    checkAuthenticationAndFetchProperties(); // Check authentication status and fetch properties
});

async function checkAuthenticationAndFetchProperties() {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            // Verify token with the server
            const response = await fetch(BASE_API_URL + '/verify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            });
            if (response.ok) {
                fetchProperties(); // Fetch properties if token is valid
            } else {
                // Token is invalid, request OTP for re-verification
                requestOTP();
            }
        } else {
            // Token is not found, request OTP for verification
            requestOTP();
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
        alert('Error checking authentication. Please try again later.');
    }
}

async function requestOTP() {
    try {
        const response = await fetch(BASE_API_URL + '/generate-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: ""
        });
        if (response.ok) {
            alert('OTP has been sent to your email. Please check your inbox.');
            // Display OTP form
            document.getElementById('otpForm').style.display = 'block';
            document.getElementById('app').style.filter = 'blur(8px)';
        } else {
            throw new Error('Failed to generate OTP');
        }
    } catch (error) {
        console.error('Error generating OTP:', error);
        alert('Failed to generate OTP. Please try again.');
    }
}

async function submitOTPForm(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    try {
        const response = await fetch(BASE_API_URL + '/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ otp })
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Store token in localStorage
            document.getElementById('otpForm').style.display = 'none';
            document.getElementById('app').style.filter = 'none';
            fetchProperties(); // Fetch properties after successful verification
        } else {
            throw new Error('Invalid OTP');
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        alert('Invalid OTP. Please try again.');
    }
}

function openForm() {
    document.getElementById('propertyForm').style.display = 'block';
    clearFormFields();
}

function closeForm() {
    document.getElementById('propertyForm').style.display = 'none';
}

function clearFormFields() {
    document.getElementById('propertyFormInner').reset();
    document.getElementById('propertyId').value = '';
    document.getElementById('imagePreview').style.display = 'none';
}

function handleImageChange() {
    const files = this.files;
    const imagePreview = document.getElementById('imagePreview');
    if (files.length > 0) {
        imagePreview.style.display = 'block';
        imagePreview.src = URL.createObjectURL(files[0]);
    } else {
        imagePreview.style.display = 'none';
        imagePreview.src = '';
    }
}

async function submitPropertyForm(event) {
    event.preventDefault();
    const token = localStorage.getItem('token'); // Get JWT token from localStorage
    const propertyId = document.getElementById('propertyId').value;
    const formData = new FormData(); // Create FormData object
    formData.append('propertyId', propertyId);
    // Append single-value form fields
    formData.append('name', document.getElementById('name').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('price', document.getElementById('price').value);
    formData.append('propertyType', document.getElementById('propertyType').value);
    formData.append('period', document.getElementById('period').value);
    formData.append('bedrooms', document.getElementById('bedrooms').value);
    formData.append('bathrooms', document.getElementById('bathrooms').value);
    // Append files (up to 5 files)
    const files = document.getElementById('images').files;
    for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
    }
    const url = propertyId ? `${API_URL}/${propertyId}` : API_URL;
    try {
        const response = await fetch(url, {
            method: propertyId ? 'PUT' : 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`, // Include JWT token in request headers
            }
        });
        if (response.ok) {
            alert('Property saved successfully!');
            closeForm();
            fetchProperties();
        } else {
            const result = await response.json();
            throw new Error(result.message);
        }
    } catch (error) {
        console.error('Save property failed:', error);
        alert(`Error: ${error.message}`);
    }
}

async function fetchProperties() {
    try {
        const token = localStorage.getItem('token'); // Get JWT token from localStorage
        const response = await fetch(API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`, // Include JWT token in request headers
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
        const properties = await response.json();
        await displayProperties(properties?.properties);
    } catch (error) {
        console.error('Failed to fetch properties:', error);
        alert('Failed to fetch properties. Please try again later.');
    }
}
// Display properties in the table
function displayProperties(properties) {
    const display = document.getElementById('propertiesDisplay');
    if (!properties || properties.length === 0) {
        display.innerHTML = '<tr><td colspan="10">No properties found</td></tr>';
        return;
    }
    display.innerHTML = properties.map(property => {
        const imageUrl = property.imageUrls && property.imageUrls.length > 0 ? property.imageUrls[0] : 'placeholder.jpg';
        const imageUrlsString = JSON.stringify(property.imageUrls).replace(/"/g, '&quot;'); // Escape double quotes in imageUrls
        return `
            <tr>
                <td>
                    <img src="${imageUrl}" alt="Property Image" style="width:100px; height: auto; cursor: pointer;" onclick="showImageGallery(${imageUrlsString})">
                </td>
                <td>${property.name || '-'}</td>
                <td>${property.location || '-'}</td>
                <td>${property.description || '-'}</td>
                <td>${property.price || '-'}</td>
                <td>${property.propertyType || '-'}</td>
                <td>${property.period || '-'}</td>
                <td>${property.bedrooms || '-'}</td>
                <td>${property.bathrooms || '-'}</td>
                <td>
                    <button class="btn" onclick="editProperty('${property.id}')"><i class="fas fa-edit"></i>Edit</button>
                    <button class="btn" onclick="deleteProperty('${property.id}')"><i class="fas fa-trash-alt"></i>Delete</button>
                </td>
            </tr>
        `;
    }).join('');
}


function showImageGallery(imageUrls) {
    const modalContent = document.getElementById('imageGalleryContent');
    modalContent.innerHTML = ''; // Clear previous images

    imageUrls.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Property Image';
        img.classList.add('hidden');
        modalContent.appendChild(img);

        // Delay displaying each image
        setTimeout(() => {
            img.classList.remove('hidden');
        }, index * 100);
    });

    const modal = document.getElementById('imagePreviewModal');
    modal.style.display = 'block';
}



// Close image gallery modal when clicking outside the modal
window.onclick = function (event) {
    const modal = document.getElementById('imageGalleryModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

async function editProperty(id) {
    const url = `${API_URL}/${id}`;
    const token = localStorage.getItem('token'); // Get JWT token from localStorage
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`, // Include JWT token in headers
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch property details');
        }
        const property = await response.json();
        if (property) {
            // Populate form fields with property details
            document.getElementById('propertyId').value = property.id;
            document.getElementById('name').value = property.name || '';
            document.getElementById('location').value = property.location || '';
            document.getElementById('description').value = property.description || '';
            document.getElementById('price').value = property.price || '';
            document.getElementById('propertyType').value = property.propertyType || '';
            document.getElementById('period').value = property.period || '';
            document.getElementById('bedrooms').value = property.bedrooms || '';
            document.getElementById('bathrooms').value = property.bathrooms || '';
            document.getElementById('propertyForm').style.display = 'block';
        } else {
            throw new Error('Property details not found');
        }
    } catch (error) {
        console.error('Edit property failed:', error);
        alert(`Error: ${error.message}`);
    }
}

async function deleteProperty(id) {
    const token = localStorage.getItem('token'); // Get JWT token from localStorage
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Include JWT token in headers
            },
        });
        if (response.ok) {
            alert('Property deleted successfully!');
            fetchProperties();
        } else {
            throw new Error('Failed to delete property');
        }
    } catch (error) {
        console.error('Delete property failed:', error);
        alert(`Error: ${error.message}`);
    }
}

function handleLocationInput() {
    const input = this.value.toLowerCase();
    const dropdown = document.getElementById('locationDropdown');
    dropdown.innerHTML = '';
    const filteredLocations = locations.filter(location => location.town.toLowerCase().includes(input));
    filteredLocations.forEach(location => {
        const option = document.createElement('div');
        option.textContent = location.town;
        option.classList.add('dropdown-option');
        option.addEventListener('click', () => {
            document.getElementById('location').value = location.town;
            dropdown.innerHTML = '';
        });
        dropdown.appendChild(option);
    });
    if (filteredLocations.length > 0) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function closeModal() {
    const modal = document.getElementById('imagePreviewModal');
    modal.style.display = 'none';
}
