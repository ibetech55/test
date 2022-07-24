#!/bin/bash


git add .
echo "Changes Staged"


echo "Commit message: "
read MSG
git commit -m "$MSG"
echo "Files commited"

echo -n "Origin: "
read ORGIN
git push origin $ORGIN
