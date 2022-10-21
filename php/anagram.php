<?php
 function check_anagram($str1, $str2) {
      if (count_chars($str1, 1) == count_chars($str2, 1)) {
           return "This '" . $str1 . "', '" . $str2 . "' are Anagram";
      }
      else {
          return "This two strings are not anagram";
      }

  }

echo check_anagram('education', 'ducatione');
