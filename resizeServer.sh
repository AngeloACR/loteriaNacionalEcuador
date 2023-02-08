originalTargetSize=50
originalTargetUnit=G
resizeAmount=20
resizeAmountUnit=G
finalTargetSize=$((originalTargetSize + resizeAmount))
finalTargetUnit=G
originalTargetSize="${originalTargetSize}${originalTargetUnit}"
resizeAmount="${resizeAmount}${resizeAmountUnit}"
finalTargetSize="${finalTargetSize}${finalTargetUnit}"

#reduce the disk space allocation by an specified value for the source /home directory
sourcePath = /home/
sourceDisk = /dev/mapper/vg_cfm20-lv_home

df -h $sourcePath      
umount $sourcePath
e2fsck -f 
resize2fs $sourceDisk $resizeAmount
lvreduce -L $resizeAmount $sourceDisk
e2fsck -f $sourceDisk
mount $sourcePath
df -h $sourcePath

#increase the disk space allocation for the target / directory
targetPath = /
targetDisk = /dev/mapper/vg_cfm20-lv_root

lvs
lvextend -L +$resizeAmount
resize2fs /dev/mapper/vg_cfm20-lv_root $finalTargetSize
df -h /