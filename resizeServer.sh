originalTargetSize=30
originalTargetUnit=G
resizeAmount=30
resizeAmountUnit=G
finalTargetSize=$((originalTargetSize + resizeAmount))
finalTargetUnit=G
originalTargetSize="${originalTargetSize}${originalTargetUnit}"
resizeAmount="${resizeAmount}${resizeAmountUnit}"
finalTargetSize="${finalTargetSize}${finalTargetUnit}"

#reduce the disk space allocation by an specified value for the source /home directory
sourcePath = /mnt/resource
sourceDisk = /dev/sdb1

df -h $sourcePath      
umount $sourcePath
e2fsck -f $sourceDisk
resize2fs $sourceDisk $resizeAmount
lvreduce -L $resizeAmount $sourceDisk
e2fsck -f $sourceDisk
mount $sourcePath
df -h $sourcePath

#increase the disk space allocation for the target / directory
targetPath = /
targetDisk = /dev/sda2

lvs
lvextend -L +$resizeAmount
resize2fs $targetDisk $finalTargetSize
df -h /