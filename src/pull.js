Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

PS C:\Users\aggra\Desktop\food> cd .\food  
PS C:\Users\aggra\Desktop\food\food> git add .
PS C:\Users\aggra\Desktop\food\food> git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\Users\aggra\Desktop\food\food> git commit
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\Users\aggra\Desktop\food\food> git push 
fatal: unable to access 'https://github.com/PIYUSHAG12345/bbmi.git/': Could not resolve host: github.com
PS C:\Users\aggra\Desktop\food\food> git push origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/PIYUSHAG12345/bbmi.git'
PS C:\Users\aggra\Desktop\food\food> https://github.com/PIYUSHAG12345/FOOD_APP.git
https://github.com/PIYUSHAG12345/FOOD_APP.git : The term 'https://github.com/PIYUSHAG12345/FOOD_APP.git' is not recognized as the 
name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify     
that the path is correct and try again.
At line:1 char:1
+ https://github.com/PIYUSHAG12345/FOOD_APP.git
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (https://github....45/FOOD_APP.git:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\aggra\Desktop\food\food> git remote add origin https://github.com/PIYUSHAG12345/FOOD_APP.git
error: remote origin already exists.
PS C:\Users\aggra\Desktop\food\food> git push
fatal: unable to access 'https://github.com/PIYUSHAG12345/bbmi.git/': Could not resolve host: github.com
PS C:\Users\aggra\Desktop\food\food> git push
To https://github.com/PIYUSHAG12345/bbmi.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/PIYUSHAG12345/bbmi.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\aggra\Desktop\food\food> git pull origin master
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 4 (delta 3), reused 4 (delta 3), pack-reused 0
Unpacking objects: 100% (4/4), 574 bytes | 7.00 KiB/s, done.
From https://github.com/PIYUSHAG12345/bbmi
 * branch            master     -> FETCH_HEAD
   12011b7..5e4f0f2  master     -> origin/master
Merge made by the 'ort' strategy.
 src/App.js | 15 ++++++++++-----
 1 file changed, 10 insertions(+), 5 deletions(-)
PS C:\Users\aggra\Desktop\food\food> git push
Enumerating objects: 48, done.
Counting objects: 100% (37/37), done.
Delta compression using up to 12 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (22/22), 9.67 KiB | 990.00 KiB/s, done.
Total 22 (delta 12), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (12/12), completed with 7 local objects.
remote: This repository moved. Please use the new location:
remote:   https://github.com/PIYUSHAG12345/FOOD_APP.git
To https://github.com/PIYUSHAG12345/bbmi.git
   5e4f0f2..21baa97  master -> master
PS C:\Users\aggra\Desktop\food\food>