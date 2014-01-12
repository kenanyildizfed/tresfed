<!Doctype html>
<head xmlns="http://www.w3.org/1999/html">
    <meta charset="UTF-8">
</head>
<body style="margin:0; background-color: #f6f6f6;">
<table>
    <tr>
        <td colspan="2"> <b>Kişi Bilgileri</b></td>
    </tr>
    <tr>
        <td>Ad</td>
        <td><?php echo $info->Isim();?></td>
    </tr>

    <tr>
        <td>Soyad</td>
        <td><?php echo $info->SoyIsim(); ?></td>
    </tr>


    <tr>
        <td>Eposta</td>
        <td><?php echo $info->Email(); ?></td>
    </tr>


        <td>Adres</td>
        <td><?php echo $info->Adres(); ?></td>
    </tr>

    <tr>
        <td>Mesaj</td>
        <td><?php echo $form->Mesaj(); ?></td>
    </tr>



</table>
</body>
</html>